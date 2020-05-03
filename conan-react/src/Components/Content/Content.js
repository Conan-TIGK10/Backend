import React from 'react'
import './Content.css'

const Content = props => {
    return (
        <div className={"ContentRoot"}>
            {props.children}
        </div>
    )
}

export default Content