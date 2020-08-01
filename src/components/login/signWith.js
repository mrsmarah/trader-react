import React from 'react';
import * as actions from '../../store/reducers/auth';
import { connect } from 'react-redux';



const Providers = (props) => {


  return (
    <>
      <button onClick={props.signWithFacebook}>Sign With Facebook</button>
      <button onClick={props.signWithGoogle}>Sign With Google</button>
    </>
  );


};
const mapStateToProps = (state) => {

  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user,
  };
};


const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(actions.login(username, password)),
  logout: () => dispatch(actions.logout()),
  signWithGoogle: () => dispatch(actions.signWithGoogle()),
  signWithFacebook: () => dispatch(actions.signWithFacebook()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Providers);