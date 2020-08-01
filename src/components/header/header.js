import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, NavItem ,NavDropdown} from 'react-bootstrap';
import './header.scss'
import Auth from '../auth';

import { connect } from 'react-redux';
import * as actions2 from '../../store/reducers/profile';
import { MDBIcon , MDBDropdownToggle , MDBDropdownMenu, MDBDropdownItem,MDBDropdown} from "mdbreact";
function Header(props) {

  return (

    <>
      <Navbar bg="light" expand="lg" className="header">
        <Navbar.Brand href="/">
          <p className="neon">
            <a href="/" className="aNeon">
                  T R A D E R </a></p> </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            
            {/* <NavLink className="a-tag" to="/">categories</NavLink> */}
            {/* <NavLink className="a-tag" to="/log">Log In</NavLink> */}
            {/* <NavDropdown className="a-tag" title="categories" id="basic-nav-dropdown">
        <NavDropdown.Item  href="#action/3.1">CARS</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">ELECTRONICS</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">FASHION</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">FURNITURES</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">MOBILES</NavDropdown.Item>
      </NavDropdown> */}
            {/* <NavLink className="a-tag" to="/admin">Admin</NavLink> */}
          </Nav>
          {/* <NavLink className="a-tag" to={`/user/${props.username}`} onClick={() => {
              props.getUser(props.username);
              props.getPosts(props.username);
            }} >{props.username || 'Profile'}
            </NavLink>  */}
            <MDBDropdown >
      <MDBDropdownToggle caret color="primary" className="a-tag" >
      <span> <img src={props.image || "https://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png"} style={{
        height:'35px',
        borderRadius:'50%'
      }}/></span>
      <span className="togleSpan">
      {props.username }
      </span>
      <span>
      <MDBIcon icon="chevron-down" />
      </span>
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem > 
          <NavLink to={`/user/${props.username}`} onClick={() => {
              props.getUser(props.username);
              props.getPosts(props.username);
            }} >Profile
            </NavLink></MDBDropdownItem>
        <MDBDropdownItem> 
          <NavLink to="/log">Log In</NavLink>
          </MDBDropdownItem>
        <MDBDropdownItem><NavLink to="/admin">Admin</NavLink></MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>logout</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>

        </Navbar.Collapse>
      </Navbar>

    </>
  );

}

const mapStateToProps = (state) => {
  console.log('state------>', state);
  return {
    username: state.auth.user.username,
  };
};
const mapDispatchToProps = (dispatch, getState) => ({
  getUser: (username) => dispatch(actions2.getUser(username)),
  getPosts: (username) => dispatch(actions2.getPosts(username)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Header;

// <Nav.Link href="#home">Home</Nav.Link>
// <Nav.Link href="#profile">profile</Nav.Link>
// <Nav.Link href="#log">log</Nav.Link>
// <Nav.Link href="#post">post</Nav.Link> 