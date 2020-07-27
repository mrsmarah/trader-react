import superagent from 'superagent';
import axios from 'axios';

const initialState = {
  user: {},
  posts: [
  ],
  

};

export default (state = initialState, action) => {
  const { type, payload } = action;
  // console.log('action ---->',payload,type);
  switch (type) {
  case 'setUser':
    return {...state,user : payload};
  case 'setPosts':
    return {...state,posts : payload};
  case 'clear':
    console.log('clear......----->');
    return initialState;
  default:
    return state;
  }
};

export const select = (name) => {
    
  return {
    type: 'categories',
    payload: name,
  };
};

export const getUser = (username) => dispatch => {
  let api = `https://trader401.herokuapp.com/user/${username}`;
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-cache',
  };
  axios.get(api, options)
    .then(data => {
      console.log('getuser',data.data.user);
      dispatch(setUser(data.data.user));
    });
};

export const setUser = payload => {
  return {
    type: 'setUser',
    payload: payload,
  };
};
export const clear = () => {
  console.log('clear....222222..----->');
  return {
    type: 'clear',
    payload: 'nan',
  };
};

export const getPosts = (username) => dispatch => {
  let api = `https://trader401.herokuapp.com/user/${username}`;
  
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-cache',
  };
  axios.get(api,options)
    .then(data => {
      console.log('getposts',data.data.data||[]);
      dispatch(setPosts(data.data.data||[]));
    });
};

export const setPosts = payload => {
  return {
    type: 'setPosts',
    payload: payload,
  };
};