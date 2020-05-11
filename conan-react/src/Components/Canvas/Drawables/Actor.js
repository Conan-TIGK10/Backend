class Actor {
    constructor(props) {
        this.transforms = props.transforms
        this.color = props.color
        this.startX = props.startX ? props.startX: 0
        this.startY = props.startY ? props.startY: 0
        this.triangle = new Triangle({rotation: 0})
    }

    draw = (ctx, time) => {
        let lastPosIndex = null;
        let nextPosIndex = null;
        let toX = this.startX
        let toY = this.startY

        for (let i = 0; i < this.transforms.length - 1; i++) {
            
            if(i === this.transforms.length - 1) {
                lastPosIndex = i
                nextPosIndex = i
                break
            }
            if (this.transforms[i+1].read_at > time) {
                lastPosIndex = i
                nextPosIndex = i + 1
                break
            }
        }

        let timeBetweenPoints = this.transforms[nextPosIndex].read_at - this.transforms[lastPosIndex].read_at
        let timeElapsedBetweenPoints = time - this.transforms[lastPosIndex].read_at
        let timeQuota = timeElapsedBetweenPoints / timeBetweenPoints

        let deltaX = this.transforms[nextPosIndex].x - this.transforms[lastPosIndex].x
        let deltaY = this.transforms[nextPosIndex].y - this.transforms[lastPosIndex].y

        let quotaX = deltaX * timeQuota
        let quotaY = deltaY * timeQuota

        toX += (this.transforms[lastPosIndex].x + quotaX) * this.surface.scale
        toY += (this.transforms[lastPosIndex].y + quotaY) * this.surface.scale

        //ctx.fillStyle = this.color
        //ctx.fillRect(toX-(this.surface.scale/2), toY-(this.surface.scale/2), this.surface.scale, this.surface.scale)
        this.triangle.draw(ctx, {x: toX, y: toY}, this.surface.scale, this.transforms[lastPosIndex].rotation)

    }

    setStart = (x, y) => {
        this.startX = x
        this.startY = y
    }

    setSurface = surface => {
        this.surface = surface
    }
}

class Triangle {

    draw = (ctx, position, scale, rotation) => {
        this.scale = scale
        this.rotation = rotation
        let top = {
            x: position.x + Math.cos((90-this.rotation)*Math.PI/180)*this.scale,
            y: position.y + (-Math.sin((90-this.rotation)*Math.PI/180)*this.scale)
        }

        let left = {
            x: position.x + Math.cos((-this.rotation)*Math.PI/180)*this.scale/2,
            y: position.y + (-Math.sin((-this.rotation)*Math.PI/180)*this.scale/2)
        }

        let right = {
            x: position.x + Math.cos((180-this.rotation)*Math.PI/180)*this.scale/2,
            y: position.y + (-Math.sin((180-this.rotation)*Math.PI/180)*this.scale/2)
        }

        ctx.beginPath()
        ctx.moveTo(top.x, top.y)
        ctx.lineTo(left.x, left.y)
        ctx.lineTo(right.x, right.y)
        ctx.closePath()
        ctx.strokeStyle = 'green'
        ctx.stroke()
        ctx.fillStyle = 'green'
        ctx.fill()

    }
}

export default Actor