class Collisions {
    constructor(props) {
        this.data = props.data
        this.color = props.color
        this.startX = props.startX ? props.startX: 0
        this.startY = props.startY ? props.startY: 0
        this.stepFactor = props.stepFactor
        this.scaleFactor = props.scaleFactor
    }

    draw = (ctx, time) => {
        for(let d of this.data) {
            if(d.read_at <= time) {
                let x = (d.x*this.surface.scale * this.stepFactor) + this.startX
                let y = (d.y*this.surface.scale * this.stepFactor) + this.startY
                Circle.draw(ctx, this.surface.scale*this.scaleFactor, x, y, this.color)
            } else
                break
        }
    }

    setSurface = (newSurface) => {
        this.surface = newSurface
    }

    setStart = (startX, startY) => {
        this.startX = startX
        this.startY = startY
    }
}

export default Collisions

class Circle {
    static draw(ctx, scale, x, y, color) {
        ctx.fillStyle = color
        ctx.strokeStyle = color
        ctx.beginPath()
        ctx.arc(x, y, scale, 0, 2*Math.PI)
        ctx.stroke()
        ctx.fill()
    }
}