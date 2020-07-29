import React from 'react';
import * as actions from '../../store/reducers/auth';
import { connect } from 'react-redux';
import Show from '../show';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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

        <form className='login' >
          <label id='inLabel'>Sign in</label>
          <TextField
            label="userName"
            name="username"
            type='text'
            onChange={handleChange}
            id='username'
          />
          <TextField id="password"
            label="password"
            name="password"
            type='text'
            onChange={handleChange}
          />
          <a href='#' className='forget'>Forget Password</a>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Sign In
          </Button><br></br>
          <a href='#' className='forget'> <span id='member' >Not a member?</span>
          Sign Up </a>
          <br></br>
          <span id='or'>or SignIn With :</span>
        </form>
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