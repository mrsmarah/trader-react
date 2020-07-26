import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';
const API = process.env.API_URL || 'https://trader401.herokuapp.com';

const initialState = {
  loggedIn: false,
  user: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log('action ---->',payload,type);
  switch (type) {
  case 'setUserIn':
    return {...state,user : payload,loggedIn : true};
  case 'logout':
    return initialState;
 
  default:
    return state;
  }
};

export const setUserIn = (user) => {
    
  return {
    type: 'setUserIn',
    payload: user,
  };
};

const validateToken = token => dispatch => {

  try {
    console.log('token--->',token);
    let user = jwt.verify(token, 'supersecret');
    cookie.save('auth', token);
    dispatch(setUserIn(user));

  } catch (ex) {
    this.logout();
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
    validateToken(res.token);
  }).catch(e => {
    console.log('ERROR SIGNUP');
    console.error();
  });

};


export const login = (username, password) => dispatch => {
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Basic ${btoa(`${username}:${password}` )}`},
    cache: 'no-cache',
  };
  
  axios.post(`${API}/signin`, {}, options).then(res => {
    console.log('res--->',res);
    this.validateToken(res.token);
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
  validateToken(token);
};


// this is missing

//  componentDidMount() {
//     const cookieToken = cookie.load('auth');
//     const token = cookieToken || null;
//     this.validateToken(token);
// }