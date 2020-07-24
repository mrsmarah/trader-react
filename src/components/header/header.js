import React from 'react';
// import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';


function Header(props) {

  return (
    <>
      <header>
        <h1>TRADER</h1>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/log">Log In</NavLink>
            </li>
            <li>
              <NavLink to="/post">Add Post</NavLink>
            </li>
          </ul>
        </nav>

      </header>
    </>
  );

}




export default Header;
