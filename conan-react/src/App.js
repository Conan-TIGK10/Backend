import React from 'react';
import Content from './Components/Content/Content'
import Canvas from './Components/Canvas/Canvas'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import ReactLoading from 'react-loading'
import dummySessions from './DummySessions'
import './App.css';

function App() {

  const [state, setState] = React.useState({
    sessions: [],
    isFetching: true,
    navbarIsOpen: false,
    dropDownIsOpen: false
  })

  React.useEffect(_ => {
    setTimeout(_ => {
      setState({ ...state, sessions: dummySessions, isFetching: false })
    }, 3000)
  }, [])

  const renderContent = _ => {
    return (
      <Content>
        <Canvas session={state.sessions[0].positions}/>
      </Content>
    )
  }

  const renderLoadAnim = _ => {
    return (
      <div className="LoadAnimContainer">
        <ReactLoading type="spin" color="#343A40" height="10%" width="10%" />
      </div>
    )
  }

  const renderNavbar = _ => {
    return (
      <div className={"NavbarRoot"}>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand>Path Visualization</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} />
          <Nav className={'mr-auto'} navbar>
            <Dropdown disabled={state.isFetching} nav isOpen={state.dropDownIsOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                Sessions
              </DropdownToggle>
              <DropdownMenu>
                {
                  state.sessions.map((session, index) => {
                    return(
                      <DropdownItem key={index}>{session.name}</DropdownItem>
                    )
                  })
                }
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Navbar>
      </div>
    )
  }

  const toggleNavbar = _ => setState({ ...state, navbarIsOpen: !state.navbarIsOpen })
  const toggleDropdown = _ => setState({...state, dropDownIsOpen: !state.dropDownIsOpen})

  return (
    <div className="App">
      {renderNavbar()}
      {state.isFetching ? renderLoadAnim() : renderContent()}
    </div>
  );
}

export default App;
