import React from 'react';
import * as actions from '../../store/reducers/auth';
import { connect } from 'react-redux';
import Show from '../show';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
      <Show condition={props.loggedIn}>
        <button onClick={props.logout}>Logout</button>
      </Show>
      <Show condition={!props.loggedIn}>

        <form className='login' onSubmit={handleSubmit} >
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
      </Show>
      <Show condition={props.loggedIn}>
        <button onClick={props.logout}>Logout</button>
      </Show>

      {/* <Show condition={!props.loggedIn}>

        <form className='login' onSubmit={handleSubmit} >
          <aside class="form-elegant">

            <div class="card">

              <div class="card-body mx-4">

                <div class="text-center">
                  <h3 class="dark-grey-text mb-5"><strong>Sign in</strong></h3>
                </div>
                <form onSubmit={handleSubmit} >

                  <div class="md-form">
                    <input type="text" id="Form-email1" placeholder='User Name' class="form-control"
                      onChange={handleChange}></input>
                    <label for="Form-email1"></label>
                  </div>

                  <div class="md-form pb-3">
                    <input type="password" id="Form-pass1" placeholder='Your password' class="form-control"
                      name="password"
                      onChange={handleChange}
                    />
                    <label for="Form-pass1"></label>
                    <p class="font-small blue-text d-flex justify-content-end">Forgot <a href="#" class="blue-text ml-1">
                      Password?</a></p>
                  </div>

                  <div class="text-center mb-3">
                    <button type="button" class="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign in</button>
                  </div>
                </form>
                <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:
            </p>

                <div class="row my-3 d-flex justify-content-center">
                  <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a">
                    <i class="fab fa-facebook-square blue-text text-center"></i>
                  </button>
                  <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a">
                    <i class="fab fa-twitter blue-text"></i>
                  </button>
                  <button type="button" class="btn btn-white btn-rounded z-depth-1a">
                    <i class="fab fa-google-plus-g blue-text"></i>
                  </button>
                </div>

              </div>

              <div class="modal-footer mx-5 pt-3 mb-1">
                <p class="font-small grey-text d-flex justify-content-end">Not a member? <a href="#"
                  class="blue-text ml-1"> Sign Up</a></p>
              </div>

            </div>

          </aside>
        </form> */}
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