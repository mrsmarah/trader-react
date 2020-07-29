import React from 'react';
import * as actions from '../../store/reducers/auth';
import { connect } from 'react-redux';
import Show from '../show';


const Login = (props) =>{
  const state = {
    username : '',
    password: '',
  };
 

  const handleChange = e => {
    state[e.target.name]=e.target.value ;
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('props.login(state.username, state.password);---->',state.username,state.password);
    console.log('login props------>',props);
    props.login(state.username, state.password);
  };

  return (
    <>
      
      <Show condition={props.loggedIn}>
        <button onClick={props.logout}>Logout</button>
      </Show>
      <Show condition={!props.loggedIn}>
        <form onSubmit={handleSubmit} >
          <input
            placeholder="userName"
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </Show>
    </>
  );


};
const mapStateToProps = (state) => {
  console.log('state login------>',state);
  console.log('actions.login------>',actions.login);
  return { 
    loggedIn: state.auth.loggedIn,
    user:  state.auth.user ,
  };
};
  
  
const mapDispatchToProps = (dispatch, getState) => ({
  
  login: (username, password) => dispatch(actions.login(username, password)),
  logout: () => dispatch(actions.logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);