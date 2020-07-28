import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';
const API = process.env.API_URL || 'https://trader401.herokuapp.com';

const initialState = {
  loggedIn: false,
  user: {},
  token: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  // console.log('action ---->',payload,type);
  switch (type) {
  case 'setUserIn':
    return {...state, user:payload.user , loggedIn : true, token: payload.token};
  case 'logout':
    cookie.save('auth', 'token');
    return initialState;
 
  default:
    return state;
  }
};

export const setUserIn = (obj) => {
    
  return {
    type: 'setUserIn',
    payload: obj,
  };
};

const validateToken = (token,dispatch) => {

  try {
    console.log('token--->',token);
    let user = jwt.verify(token, 'Dealer5-401+');
    cookie.save('auth', token);
    dispatch(setUserIn({user,token}));

  } catch (ex) {
    dispatch(logout());
    console.log('token Validation error');
  }
};
export const signup = (username, password, email, role) => dispatch => {
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-cache',
  };
  axios.post(`${API}/signup`, { username, password, email, role }, options).then(res => {
    // try {
    //   console.log('token--->',res.token);
    //   let user = jwt.verify(res.token, 'supersecret');
    //   cookie.save('auth', res.token);
    //   dispatch(setUserIn(user));
  
    // } catch (ex) {
    //   this.logout();
    //   console.log('token Validation error');
    // }
    validateToken(res.data.token,dispatch);
  }).catch(e => {
    console.log('ERROR SIGNUP');
    console.error();
  });

};


export const login = (username, password) => dispatch => {
  console.log('username, password---------------->',username, password);
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Basic ${btoa(`${username}:${password}` )}`},
    cache: 'no-cache',
  };
  
  axios.post(`${API}/signin`, {}, options).then(res => {
    console.log('res--->',res);
    // try {
    //   console.log('token--->',res.data.token);
    //   let user = jwt.verify(res.data.token, 'Dealer5-401+');
    //   console.log('user--->',user);
    //   cookie.save('auth', res.data.token);
    //   dispatch(setUserIn(user));
  
    // } catch (ex) {
    //   this.logout();
    //   console.log('token Validation error');
    // }
    validateToken(res.data.token,dispatch);
  }).catch(e => {
    console.log('ERROR SIGNUP');
    console.error();
  });
  
};

export const logout = () => {
  return {
    type: 'logout',
    payload: 'payload',
  };
};

export const load = () => dispatch => {
  const cookieToken = cookie.load('auth');
  const token = cookieToken || null;
  validateToken(token,dispatch);
};


// this is missing

//  componentDidMount() {
//     const cookieToken = cookie.load('auth');
//     const token = cookieToken || null;
//     this.validateToken(token);
// }