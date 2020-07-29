import React from 'react';
import { connect } from 'react-redux';
import Show from '../show';
import * as actions from '../../store/reducers/auth';
import './signup.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const SignUP = (props) => {
  const state = {
    username: '',
    password: '',
    email: '',
    role: '',
  };

  const handleChange = e => {
    state[e.target.name] = e.target.value;
    console.log('handle Change>>>>', state);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.signup(state.username, state.password, state.email, state.role);
  };


  return (
    <>
      <Show condition={!props.loggedIn}>
        <div className='flexRight'>
          <form className='signup'  >
            <label id='upLabel' >Signup</label>
            <TextField id="standard-basic" label="userName"
              name="username"
              onChange={handleChange}
              className='inputInfo'
            >
            </TextField>
            <TextField id="standard-basic" label="password"
              name="password"
              onChange={handleChange}
              className='inputInfo'
            >
            </TextField>
            <TextField id="standard-basic" label="email"
              onChange={handleChange}
              name="email"
              className='inputInfo'
            >
            </TextField>
            <TextField id="standard-basic" label="role"
              name="role"
              onChange={handleChange}
              className='inputInfo'
            >
            </TextField>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Sign Up
            </Button>
          </form>
        </div>


      </Show>

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