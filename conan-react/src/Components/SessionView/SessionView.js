import React from 'react'
import './SessionView.css'
import dummyPositions from './DummyPositions'
import dummyCollisions from './DummyCollisions'

import Canvas from '../Canvas/Canvas'
import { Jumbotron } from 'reactstrap'
import positions from './DummyPositions'

const SessionView = props => {

    const [state, setState] = React.useState({
        positions: [],
        collisions: [],
        duration: null
    })

    React.useEffect(_ => {
        setTimeout(_ => {
            const duration = calculateDuration(dummyPositions)
            setState({positions: dummyPositions, collisions: dummyCollisions, duration: duration})
        }, 1)
    }, [])

    const calculateDuration = positions => {
        return (positions[positions.length-1].read_at - positions[0].read_at)/1000 
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
                <Canvas positions={state.positions}/>
            </div>
        </div>
    )
}

export default SessionView