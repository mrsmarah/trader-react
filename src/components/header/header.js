import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, NavItem ,NavDropdown} from 'react-bootstrap';
import './header.scss'
import { connect } from 'react-redux';
import * as actions2 from '../../store/reducers/profile';

function Header(props) {

  return (

    <>
      <Navbar bg="light" expand="lg" className="header">
        <Navbar.Brand href="/"> T R A D E R </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            
            <NavLink className="a-tag" to="/">Home</NavLink>
            <NavDropdown className="a-tag" title="categories" id="basic-nav-dropdown">
        <NavDropdown.Item  href="#action/3.1">Electronics</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
            <NavLink className="a-tag" to={`/user/${props.username}`} onClick={() => {
              props.getUser(props.username);
              props.getPosts(props.username);
            }} >{props.username || 'Profile'}</NavLink>
            <NavLink className="a-tag" to="/admin">Admin</NavLink>
            <NavLink className="a-tag" to="/log">Log In</NavLink>
          </Nav>
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