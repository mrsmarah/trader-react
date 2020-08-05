import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Show from '../show';
import * as actions from '../../store/reducers/auth';
import Form from 'react-bootstrap/Form';
import './signup.css';

const SignUP = (props) => {
  const state = {
    username: '',
    password: '',
    email: '',
    role: '',
  };

  const [redirect, setRedirect] = useState(false);


  const handleChange = e => {
    console.log('signuo---->', state);
    state[e.target.name] = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.signup(state.username, state.password, state.email, state.role);
    setRedirect(true);
  };


  return (
    <>
      <Show condition={props.loggedIn} >
        {(redirect === true) ? <Redirect to='/' /> : null}
      </Show>
      <Show condition={!props.loggedIn}>
        {/* <div className='flexRight'> */}
        <form className='login' onSubmit={handleSubmit}  >
          <label className='labelForm'>SIGN UP</label>
          <Form.Control
            placeholder="User Name"
            name="username"
            id='username'
            className='borderBu'

            onChange={handleChange}>
          </Form.Control>
          <Form.Control
            placeholder="Password"
            name="password"
            id='password'
            onChange={handleChange}
            className='borderBu'

          >
          </Form.Control>
          <Form.Control
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className='borderBu'

          >
          </Form.Control>
          {/* <Form.Control
            placeholder="Role"
            name="role"
            onChange={handleChange}
            className='borderBu'
          > */}
          {/* </Form.Control> */}
          <button id='signInBt'>SING UP</button>
        </form>

      </Show>

      <div id='fixFoter'></div>

    </>
  );


};

const mapStateToProps = (state) => {
  console.log('state------>', state);
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user,
  };
};


const mapDispatchToProps = (dispatch, getState) => ({
  signup: (username, password, email, role) => dispatch(actions.signup(username, password, email, role)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUP);