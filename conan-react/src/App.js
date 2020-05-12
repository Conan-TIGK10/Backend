import React from 'react';
import SessionView from './Components/SessionView/SessionView'

import ReactLoading from 'react-loading'
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [state, setState] = React.useState({
    sessions: [],
    activeSessionIndex: 0,
    isFetching: true,
  })

  React.useEffect(_ => {
    fetchSessions()
  }, [])

  const fetchSessions = async _ => {
    const url = 'http://3.122.218.59/api/session'
    const reqConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {

      const response = await fetch(url, reqConfig)
      const data = await response.json()
      setState({...state, sessions: data, isFetching: false })
    
    } catch(e) {
      console.log(e)
    }
  }

  const renderSessionView = _ => {
    return (
      <SessionView session={state.sessions[state.activeSessionIndex]}/>
    )
  }

  const renderLoadAnim = _ => {
    return (
      <div className="LoadAnimContainer">
        <ReactLoading type="spin" color="#343A40" height="10%" width="10%" />
      </div>
    )
  }

  const onClickDropdown = e => {
    setState({...state, activeSessionIndex: e.target.id})
  }

  return (
    <div className="App">
      <Navbar dropdownIsDisabled={state.isFetching} dropdownItems={state.sessions} onClickDropdown={onClickDropdown}></Navbar>
      {state.isFetching ? renderLoadAnim() : renderSessionView()}
    </div>
  );
}

export default App;
