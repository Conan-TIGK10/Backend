import React from 'react'
import {
    Navbar as NavBar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import './Navbar.css'

const Navbar = props => {

    const [state, setState] = React.useState({
        navbarIsOpen: false,
        dropDownIsOpen: false
    })

    const toggleNavbar = _ => setState({ ...state, navbarIsOpen: !state.navbarIsOpen })
    const toggleDropdown = _ => setState({ ...state, dropDownIsOpen: !state.dropDownIsOpen })

    return (
        <div className="NavbarRoot">
            <NavBar color="dark" dark expand="md">
                <NavbarBrand>Path Visualization</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Nav className={'mr-auto'} navbar>
                    <Dropdown disabled={props.dropdownIsDisabled} nav isOpen={state.dropDownIsOpen} toggle={toggleDropdown}>
                        <DropdownToggle nav caret>
                            Sessions
                        </DropdownToggle>
                        <DropdownMenu>
                            {
                                props.dropdownItems.map((item, index) => {
                                    return (
                                        <DropdownItem id={index} key={index} onClick={props.onClickDropdown}>{item.name}</DropdownItem>
                                    )
                                })
                            }
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </NavBar>
        </div>
    )
}

export default Navbar