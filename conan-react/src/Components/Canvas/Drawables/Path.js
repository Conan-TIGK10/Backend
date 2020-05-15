class Path {
    constructor(props) {
        this.color = props.color ? props.color : 'black'
        this.collisionColor = props.collisionColor ? props.collisionColor : 'red'
        this.startX = props.startX ? props.startX: 0
        this.startY = props.startY ? props.startY: 0
        this.positions = props.positions
        this.scaleFactor = props.scaleFactor
        this.stepFactor = props.stepFactor
    }


    draw = (ctx, time) => {
        ctx.strokeStyle = this.color

        let outOfBounds = false
        ctx.lineWidth = this.scaleFactor * this.surface.scale
        ctx.beginPath()
        ctx.moveTo(this.startX, this.startY)
        
        for(let i=0; i<this.positions.length-1; i++) {
            if(this.positions[i].read_at > time){
                break;
            }

            let toX = this.startX 
            let toY = this.startY

            // MAKE IT BUTTER SMOOTH
            if(this.positions[i+1].read_at > time){
                let timeBetweenPoints = this.positions[i+1].read_at-this.positions[i].read_at
                let timeElapsedBetweenPoints = time - this.positions[i].read_at
                let timeQuota = timeElapsedBetweenPoints / timeBetweenPoints

                let deltaX = this.positions[i+1].x - this.positions[i].x
                let deltaY = this.positions[i+1].y - this.positions[i].y

                let quotaX = deltaX * timeQuota
                let quotaY = deltaY * timeQuota

                toX += (this.positions[i].x + quotaX) * this.stepFactor * this.surface.scale
                toY += (this.positions[i].y + quotaY) * this.stepFactor * this.surface.scale
            } else {
                toX += this.positions[i+1].x*this.stepFactor * this.surface.scale
                toY += this.positions[i+1].y*this.stepFactor * this.surface.scale
            }   
              
            // TRACK IF INSIDE
            
            if(!this.surface.isInside(toX, toY)) {
                this.surface.scale = Math.floor(this.surface.scale - this.surface.scale/4)
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