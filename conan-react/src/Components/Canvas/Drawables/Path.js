class Path {
    constructor(props) {
        this.scale = props.scale ? props.scale : 1
        this.color = props.color ? props.color : 'black'
        this.collisionColor = props.collisionColor ? props.collisionColor : 'red'
        this.startX = props.startX ? props.startX: 0
        this.startY = props.startY ? props.startY: 0
        this.positions = props.positions
    }


    draw = (ctx, time) => {
        ctx.strokeStyle = this.color

        let outOfBounds = false
        ctx.lineWidth = this.scale / 2
        ctx.beginPath()
        ctx.moveTo(this.startX, this.startY)
        
        for(let i=0; i<this.positions.length-1; i++) {
            if(this.positions[i].t > time){
                break;
            }

            let toX = this.startX 
            let toY = this.startY

            // MAKE IT BUTTER SMOOTH
            if(this.positions[i+1].t > time){
                let timeBetweenPoints = this.positions[i+1].t-this.positions[i].t
                let timeElapsedBetweenPoints = time - this.positions[i].t
                let timeQuota = timeElapsedBetweenPoints / timeBetweenPoints

                let deltaX = this.positions[i+1].x - this.positions[i].x
                let deltaY = this.positions[i+1].y - this.positions[i].y

                let quotaX = deltaX * timeQuota
                let quotaY = deltaY * timeQuota

                toX += (this.positions[i].x + quotaX) * this.scale
                toY += (this.positions[i].y + quotaY) * this.scale
            } else {
                toX += this.positions[i+1].x*this.scale
                toY += this.positions[i+1].y*this.scale
            }   
              
            // TRACK IF INSIDE
            const halfSide = this.scale <= 1 ? 0: Math.floor(this.scale/2)
            const left = toX - halfSide
            const top = toY - halfSide
            const right = toX + halfSide
            const bottom = toY + halfSide

            if(!this.surface.isInside(top, left, right, bottom)) {
                this.scale = Math.floor(this.scale - this.scale/4)
                outOfBounds = true
                break
            }

            // DRAW
            ctx.lineTo(toX, toY)
            ctx.stroke()
        }

        // ACT IF OUTSIDE CANVAS
        if(outOfBounds){
            this.surface.draw(ctx)
            this.draw(ctx, time)
        }
    }

    setStart = (x, y) => {
        this.startX = x
        this.startY = y
    }

    setSurface = surface => {
        this.surface = surface
    }
}

export default Path