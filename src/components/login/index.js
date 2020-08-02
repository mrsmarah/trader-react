
import React, { useState, useEffect } from 'react';
import * as actions from '../../store/reducers/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import Show from '../show';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './login.css';
import Signup from '../signup';
const Login = (props) => {
  const state = {
    username: '',
    password: '',
  };

  const [signup, setSignup] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleChange = e => {
    state[e.target.name] = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('props.login(state.username, state.password);---->', state.username, state.password);
    // console.log('login props------>', props);
    props.login(state.username, state.password);
    setRedirect(true);
  };

  return (
    <>
      <div className='back'>
        <Show condition={props.loggedIn} >
          {(redirect === true) ? <Redirect to='/' /> : null}
        </Show>
        <div className={'sign'}>
          <Show condition={props.loggedIn} >
            <button onClick={props.logout}>Logout</button>
          </Show>
          <Show condition={!props.loggedIn}>
            {/* <div className='flexLeft'> */}

            <form className='login' onSubmit={handleSubmit}  >
              <label className='labelForm'>SIGN IN</label>
              <Form.Control
                placeholder="userName"
                name="username"
                id='username'
                type='text'
                onChange={handleChange}>
              </Form.Control>
              <Form.Control
                placeholder="password"
                name="password"
                id='password'
                type='password'
                onChange={handleChange}>
              </Form.Control>
              <button id='signInBt'>SIGN IN</button>
              <p className='newUser' >New User ? <Link onClick={() => { setSignup(true); }}  >register </Link></p>
            </form>
            <Show condition={!props.loggedIn && signup}>
              <Signup />
              {/* </div> */}


            </Show>

            {/* </div> */}

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