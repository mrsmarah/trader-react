import superagent from 'superagent';
import axios from 'axios';
import cookie from 'react-cookies';
let token = cookie.load('auth');


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
  case 'delete':
    console.log('delete......----->');
    let newPosts = state.posts.filter(post=>post._id !== payload._id) ;
    return {...state,posts : newPosts};
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
  console.log('token inside profile---->',token);
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' 
      ,'Authorization': `Bearer ${token}`},
    cache: 'no-cache',
  };
  console.log('token inside profile / options---->',token,options,api);
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
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`},
    cache: 'no-cache',
  };
  axios.get(api,options)
    .then(data => {
      console.log('getposts',data.data.data||[]);
      dispatch(setPosts(data.data.data||[]));
    });
};
export const deletePost = (id) => dispatch => {
  let api = `https://trader401.herokuapp.com/search/${id}`;
  
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`},
    cache: 'no-cache',
  };
  axios.delete(api,options)
    .then(data => {
      console.log('deletepost',data||[]);
      dispatch(delPost(data.data||[]));
    });
};
export const delPost = payload => {
  return {
    type: 'delete',
    payload: payload,
  };
};
export const setPosts = payload => {
  return {
    type: 'setPosts',
    payload: payload,
  };
};