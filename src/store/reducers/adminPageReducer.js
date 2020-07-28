/* eslint-disable indent */
import React from 'react';
import axios from 'axios';
const API = process.env.API_URL || 'https://trader401.herokuapp.com';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlhemFuIiwiX2lkIjoiNWVmMzBjODQwODBkMWQwMDE3MTFlMzFjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTk1OTIyOTI2LCJleHAiOjE1OTYwMDkzMjZ9.PMJDwUGDkhuf_RHxeMhD3SGtBfGYpPN0B6T6XY5LbwY';
const initState = {
  adminPost: [],
};

export default (state = initState, action) => {
  const { type, payload } = action;
  // console.log('payload From Admin Page >>', payload);
  // console.log('type From Admin Page >>', type);
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
      };
    default:
      return state;
  }
};

export const statusPost = () => dispatch => {
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    cache: 'no-cache',
  };
  axios.get(`${API}/status`, options)
    .then(res => {
      dispatch(getAdminPost(res.data.results));
    })
    .catch(e => {
      console.log('ERROR GET POSTS');
      console.error();
    });
};


export const changeStatus = (id, newPost) => dispatch => {
  console.log('newPost >>>>', newPost);
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    cache: 'no-cache',
  };
  axios.put(`${API}/status/${id}`, newPost, options)
    .then(res => {
      console.log('Resssssss >>>', res.data);
      dispatch(updatePost(res.data));
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
export const updatePost = (post) => {
  return {
    type: 'PUTPOST',
    payload: post,
  };
};
