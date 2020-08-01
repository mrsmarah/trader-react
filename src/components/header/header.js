import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, NavItem ,NavDropdown } from 'react-bootstrap';
import './header.scss'
import Auth from '../auth';

import { connect } from 'react-redux';
import * as actions2 from '../../store/reducers/profile';
import { MDBIcon , MDBDropdownToggle , MDBDropdownMenu, MDBDropdownItem,MDBDropdown,MDBCol , MDBFormInline} from "mdbreact";
function Header(props) {

  return (

    <>
      <Navbar bg="light" expand="lg" className="header">
        <Navbar.Brand  >
          <p className="neon">
            <Link to="/" className="aNeon">
                  T R A D E R </Link></p> </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
          <MDBCol md="6">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </MDBFormInline>
    </MDBCol>
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
      {props.username || 'log in'}
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