/* eslint-disable default-case */
/* eslint-disable indent */
import axios from 'axios';
const API = process.env.API_URL || 'https://trader401.herokuapp.com';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlhemFuIiwiX2lkIjoiNWVmMzBjODQwODBkMWQwMDE3MTFlMzFjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTk1OTIyOTI2LCJleHAiOjE1OTYwMDkzMjZ9.PMJDwUGDkhuf_RHxeMhD3SGtBfGYpPN0B6T6XY5LbwY';

const initState = {
  onePostAdmin: '',
};
export default (state = initState, action) => {
  const { type, payload } = action;
  console.log('Type from page onePostAdmin', type);
  console.log('payload from page onePostAdmin', payload);
  switch (type) {
    case 'GETPOST':
      return {
        ...state,
        adminPost: payload,
      };
    case 'PUTPOST':
      let adminPost = state.adminPost.map((post) =>
        post._id === payload._id ? payload : post);
      return {
        ...state,
        adminPost: adminPost,
      }; default:
      return state;
  }
};

export const getPost = (id) => dispatch => {
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    cache: 'no-cache',
  };
  axios.get(`${API}/status/${id}`, options)
    .then(res => {
      console.log('res from onePostAdmin >>>>', res);
      dispatch(getAdminPost(res.body));
      console.log('Post Updated');
    })
    .catch(e => {
      console.log('ERROR UPDATE POSTS');
      console.error();
    });
};

export const getAdminPost = (post) => {
  return {
    type: 'GETPOST',
    payload: post,
  };
};

export const updatePost = (payload) => {
  return {
    type: 'PUTPOST',
    payload: payload,
  };
};
