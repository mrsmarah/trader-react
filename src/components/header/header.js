import React, { useState, useEffect }  from 'react';
import { NavLink ,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, NavItem ,NavDropdown } from 'react-bootstrap';
import './header.scss'
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/reducers/auth';
import Auth from '../auth';
import Show from '../show';
import { connect } from 'react-redux';
import * as actions2 from '../../store/reducers/profile';
import { MDBIcon , MDBDropdownToggle , MDBDropdownMenu, MDBDropdownItem,MDBDropdown,MDBCol , MDBFormInline} from "mdbreact";
function Header(props) {
  const [redirect, setRedirect] = useState(false);
  return (
    <>
      {(redirect === true) ? <Redirect to='/' /> : null}
      <Navbar  expand="lg" className="header">
        <Navbar.Brand>
          <p className="neon">
            <Link to="/" className="aNeon">
              {/* <img src="../../../../assets/logo.png"/> */}
                  T R A D E R </Link></p></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className=" mr-auto">
            {/* <MDBCol md="6">
              <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                  <span className="input-group-text purple lighten-3" id="basic-text1">
                    <MDBIcon className="text-white" icon="search" />
                  </span>
                </div>
                <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
              </div>
            </MDBCol> */}
          </Nav>
          {/* <NavLink className="a-tag" to={`/user/${props.username}`} onClick={() => {
              props.getUser(props.username);
              props.getPosts(props.username);
            }} >{props.username || 'Profile'}
            </NavLink>  */}

          <MDBDropdown >
            <MDBDropdownToggle caret color="primary" className="a-tag" >
              <Show condition={props.loggedIn}>
                <span> <img src={props.user.userImage || 'https://axxeltrova.com/wp-content/uploads/2017/11/round-placeholder.png'} alt="img" style={{
                  height:'35px',
                  borderRadius:'50%'
                }}/></span>
                <span className="pFonts togleSpan">
                  {props.username }
                </span>
              </Show>
              <Show condition={!props.loggedIn}>
                <span >
                  <NavLink className="pFonts" to="/log" >Log In</NavLink>
                </span>
              </Show>
              <Show condition={props.loggedIn}>
                <span>
                  <MDBIcon icon="chevron-down" />
                </span>
              </Show>
              
            </MDBDropdownToggle>
            <Show condition={props.loggedIn}>
              <MDBDropdownMenu basic>
                <MDBDropdownItem > 
                  <NavLink className="pFonts" to="/"> Home</NavLink>
                </MDBDropdownItem>
                <MDBDropdownItem > 
                  <NavLink className="pFonts" to={`/user/${props.username}`} onClick={() => {
                    props.getUser(props.username);
                    props.getPosts(props.username);
                  }} >Profile Page
                  </NavLink></MDBDropdownItem>
                <MDBDropdownItem > 
                  <NavLink className="pFonts" to="/favList">Favorite List
                  </NavLink>
                </MDBDropdownItem>
                <MDBDropdownItem > 
                  <NavLink className="pFonts" to="/chat"> My Chats
                  </NavLink>
                </MDBDropdownItem>
                <MDBDropdownItem> 
                  <NavLink className="pFonts" to="/post">Add post</NavLink>
                </MDBDropdownItem>
                <Auth capability="admin">
                  <MDBDropdownItem><NavLink className="pFonts" to="/admin">Admin Page</NavLink></MDBDropdownItem>
                </Auth>
                {/* <MDBDropdownItem><NavLink to="/admin">Admin</NavLink></MDBDropdownItem> */}
                <MDBDropdownItem divider />
                <MDBDropdownItem  onClick={() =>{
                  setRedirect(true);
                  props.logout();
                  
                }}><span className="logouth" >logout</span> </MDBDropdownItem>
              </MDBDropdownMenu>
                 
            </Show>
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
    loggedIn: state.auth.loggedIn,
    user: state.profile.user,
  };
};
const mapDispatchToProps = (dispatch, getState) => ({
  getUser: (username) => dispatch(actions2.getUser1(username)),
  getPosts: (username) => dispatch(actions2.getPosts1(username)),
  logout: () => dispatch(actions.logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Header;

// <Nav.Link href="#home">Home</Nav.Link>
// <Nav.Link href="#profile">profile</Nav.Link>
// <Nav.Link href="#log">log</Nav.Link>
// <Nav.Link href="#post">post</Nav.Link> 