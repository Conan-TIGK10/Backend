import React from 'react';
import SessionView from './Components/SessionView/SessionView'

import ReactLoading from 'react-loading'
import dummySessions from './DummySessions'
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [state, setState] = React.useState({
    sessions: [],
    isFetching: true,
  })

  React.useEffect(_ => {
    setTimeout(_ => {
      setState({ ...state, sessions: dummySessions, isFetching: false })
    }, 3000)
  }, [])

  const renderSessionView = _ => {
    return (
      <SessionView session={state.sessions[0]}/>
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
    console.log(e.target.id)
  }

  return (
    <div className="App">
      <Navbar dropdownIsDisabled={state.isFetching} dropdownItems={state.sessions} onClickDropdown={onClickDropdown}></Navbar>
      {state.isFetching ? renderLoadAnim() : renderSessionView()}
    </div>
  );
}

export default App;
