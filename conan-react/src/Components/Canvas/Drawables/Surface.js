class Surface {
    constructor(props) {
        this.width = props.width ? props.width: 0
        this.height = props.height ? props.height : 0
        this.scale = props.scale ? props.scale : 1
        this.color = props.color ? props.color : "black"
    }
    
    draw = ctx => {
        ctx.fillStyle = this.color
        ctx.fillRect(0,0, this.width, this.height)
    }

    setWidth = newWidth => {
        this.width = newWidth
    }

    setHeight = newHeight => {
        this.height = newHeight
    }

    getCenter = _ => {
        return {
            x: Math.floor(this.width / 2),
            y: Math.floor(this.height / 2)
        }
    }

    isInside = (top, left, right, bottom) => {
        const topIsInside = top >= 0
        const leftIsInside = left >= 0
        const bottomIsInside = bottom <= this.height
        const rightIsInside = right <= this.width

        return (topIsInside && leftIsInside && bottomIsInside && rightIsInside)
    }
}

export default Surface