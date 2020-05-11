import React from 'react'
import Surface from './Drawables/Surface'
import './Canvas.css'
import Path from './Drawables/Path'
import Actor from './Drawables/Actor'

const Canvas = props => {

    const surface = new Surface({
        color: '#343A40',
        scale: 100
    })

    const path = new Path({
        color: 'white',
        positions: props.positions,
    })

    const actor = new Actor({
        color: 'green',
        transforms: props.positions
    })

    const rootRef = React.useRef(null)
    const canvasRef = React.useRef(null)
    const ctx = React.useRef(null)
    const requestRef = React.useRef(null)
    const animationIsRunning = React.useRef(false)
    const animationTimeRef = React.useRef({
        start: null,
        elapsed: null
    })

    React.useEffect(() => {
        const canvas = canvasRef.current
        ctx.current = canvas.getContext('2d')
        const size = calculateCanvasSize()
        ctx.current.canvas.width = size
        ctx.current.canvas.height = size
        surface.setWidth(size)
        surface.setHeight(size)
        path.setStart(surface.getCenter().x, surface.getCenter().y)
        path.setSurface(surface)
        actor.setStart(surface.getCenter().x, surface.getCenter().y)
        actor.setSurface(surface)
        surface.draw(ctx.current)
        return () => cancelAnimationFrame(requestRef.current)
    })

    const calculateCanvasSize = _ => {
        const rootWidth = rootRef.current.offsetWidth
        const rootHeight = rootRef.current.offsetHeight
        const size = rootWidth < rootHeight ? rootWidth : rootHeight
        const oddSize = size % 2 == 0 ? size - 23 : size - 24

        return oddSize
    }

    const toggleAnimation = e => {
        if (animationIsRunning.current) {
            animationTimeRef.current = {
                start: null,
                elapsed: null
            }
            surface.draw(ctx.current)
            cancelAnimationFrame(requestRef.current)
        } else {
            requestAnimationFrame(animate)
        }
        animationIsRunning.current = !animationIsRunning.current
    }

    const animate = time => {
        calculateTime(time)
        surface.draw(ctx.current, animationTimeRef.current.elapsed)
        path.draw(ctx.current, animationTimeRef.current.elapsed)
        actor.draw(ctx.current, animationTimeRef.current.elapsed)
        requestRef.current = requestAnimationFrame(animate)
    }

    const calculateTime = timeInMs => {
        if(animationTimeRef.current.start === null) {
            animationTimeRef.current.start = timeInMs
            animationTimeRef.current.elapsed = 0
        } else {
            animationTimeRef.current.elapsed = timeInMs - animationTimeRef.current.start
        }
    }

    return (
        <div ref={rootRef} className="CanvasRoot">
            <canvas
                className="Canvas"
                ref={canvasRef}
                onClick={toggleAnimation}
            />
        </div>
    )
}

export default Canvas