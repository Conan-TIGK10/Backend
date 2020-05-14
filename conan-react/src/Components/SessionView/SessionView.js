import React from 'react'
import './SessionView.css'

import Canvas from '../Canvas/Canvas'
import { Jumbotron, Button} from 'reactstrap'

const SessionView = props => {

    const canvasController = React.useRef({
        isPlaying: false,
        time: 0
    })

    const [state, setState] = React.useState({
        positions: [],
        collisions: [],
        duration: null
    })

    React.useEffect(_ => {
        fetchData()
    }, [props.session])

    const fetchData = async _ => {
        const positionUrl = 'http://3.122.218.59/api/position/' + props.session.id
        const collisionUrl = 'http://3.122.218.59/api/collision/' + props.session.id

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const requestPromises = [
            fetch(positionUrl, reqConfig),
            fetch(collisionUrl, reqConfig)
        ]

        const resolvedRequestPromises = await Promise.all(requestPromises)

        const jsonPromises = [
            resolvedRequestPromises[0].json(),
            resolvedRequestPromises[1].json()
        ]

        const resolvedJsonPromises = await Promise.all(jsonPromises)

        const newDuration = calculateDuration(resolvedJsonPromises[0])
        const collisions = buildCollisionData(resolvedJsonPromises[0], resolvedJsonPromises[1])

        setState({...state, positions: resolvedJsonPromises[0], collisions: collisions, duration: newDuration})
    }

    const calculateDuration = positions => {
        return (positions[positions.length-1].read_at - positions[0].read_at)/1000 
    }

    const buildCollisionData = (positions, collisions) => {
        collisions.forEach(c => {
            const parentPos = positions.find(p => p.id === c.positionId)
            if(parentPos) {
                c.x = parentPos.x
                c.y = parentPos.y
                c.read_at = parentPos.read_at
            }
        });

        return collisions
    }

    return (
        <div className="SessionViewRoot">
            <div className="SessionInfo">
                <Jumbotron>
                    <h1 className="display-3">{props.session.name}</h1>
                    <hr className="my-2"></hr>
                    <p className="SessionSmallInfo">Positions: <strong>{state.positions.length}</strong></p>
                    <p className="SessionSmallInfo">Collisions: <strong>{state.collisions.length}</strong></p>
                    <p className="SessionSmallInfo">Duration: <strong>{`${state.duration}s`}</strong></p>
                </Jumbotron>
            </div>
            <div className="SessionVisualisation">
                <Canvas positions={state.positions} collisions={state.collisions} controller={canvasController.current}/>
            </div>
        </div>
    )
}

export default SessionView