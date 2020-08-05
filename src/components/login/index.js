import React, { useState, useEffect } from 'react';
import * as actions from '../../store/reducers/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import Show from '../show';
import Form from 'react-bootstrap/Form';
import { MDBInput } from 'mdbreact';
import FontAwesome from 'react-fontawesome';
import './hover.scss';
import './login.css';
import Signup from '../signup';
const Login = (props) => {
  const state = {
    username: '',
    password: '',
  };

  const [signup, setSignup] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = e => {
    state[e.target.name] = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.login(state.username, state.password);
    setRedirect(true);
  };

  return (
    <>
      <div className='back'>
        <Show condition={props.loggedIn} >
          {(redirect === true) ? <Redirect to='/' /> : null}
        </Show>
        <div className='sign'>
          <Show condition={props.loggedIn} >
            <button onClick={props.logout}>Logout</button>
          </Show>
          <Show condition={!props.loggedIn && !signup}>

            <form className='login' onSubmit={handleSubmit}  >
              <label className='labelForm pFonts'>SIGN IN</label>
              <Form.Control
                placeholder="User Name"
                name="username"
                id='username'
                className='pFonts borderBu '
                type='text'
                onChange={handleChange}>
              </Form.Control>
              <Form.Control
                placeholder="Password"
                name="password"
                id='password'
                className='pFonts borderBu'
                type='password'
                onChange={handleChange}>
              </Form.Control>
              <button id='signInBt'>SIGN IN</button>
              <p className='newUser pFonts' >New User ? <Link onClick={() => { setSignup(true); }}  >Register </Link></p>
            </form>
          </Show>
          <Show condition={!props.loggedIn && signup}>
            <Signup />
            <FontAwesome
              className="fas fa-chevron-circle-left  shrink"
              id='goBack'
            >
              <Link id='goBackBtn ' className="btn pulse backsize" onClick={() => { setSignup(false); }}  > Go Back </Link>
            </FontAwesome>
          </Show>


          <Show condition={props.loggedIn} className='clear'>
            <button onClick={props.logout}>Logout</button>
          </Show>
        </div>
      </div>

      <div >
        <h1 id='theWord' >T R A D E R<span>&nbsp;</span></h1>
        <h1 id='journey'> START YOUR TRADING JOURNEY ...</h1>


      </div>

    </>
  );


};
const mapStateToProps = (state) => {
  console.log('state login------>', state);
  console.log('actions.login------>', actions.login);
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user,
  };
};


const mapDispatchToProps = (dispatch, getState) => ({

  login: (username, password) => dispatch(actions.login(username, password)),
  logout: () => dispatch(actions.logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

