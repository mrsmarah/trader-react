import React from 'react';
import * as actions from '../../store/reducers/auth';
import { connect } from 'react-redux';
import Show from '../show';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './login.css';
const Login = (props) => {
  const state = {
    username: '',
    password: '',
  };


  const handleChange = e => {
    state[e.target.name] = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('props.login(state.username, state.password);---->', state.username, state.password);
    console.log('login props------>', props);
    props.login(state.username, state.password);
  };

  return (
    <>
      <Show condition={props.loggedIn} >
        <button onClick={props.logout}>Logout</button>
      </Show>
      <Show condition={!props.loggedIn}>
        <div className='flexLeft'>
          <form className='login' onSubmit={handleSubmit}  >
            <label>Sign in</label>
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
            <button>Sign in</button>
          </form>
        </div>

      </Show>
      <Show condition={props.loggedIn} className='clear'>
        <button onClick={props.logout}>Logout</button>
      </Show>
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