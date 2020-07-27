/* eslint-disable indent */
import React from 'react';
import axios from 'axios';
const API = process.env.API_URL || 'https://trader401.herokuapp.com';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlhemFuIiwiX2lkIjoiNWVmMzBjODQwODBkMWQwMDE3MTFlMzFjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTk1ODQwMjg4LCJleHAiOjE1OTU5MjY2ODh9.dQffdtH5tOwFg9mZRJ2Hoejp9JBcaRkntdl_OcSmbEY';
const initState = {
  adminPost: [],
};

export default (state = initState, action) => {
  const { type, payload } = action;
  console.log('payload From Admin Page >>', payload);
  console.log('type From Admin Page >>', type);
  switch (type) {
    case 'GETPOST':
      return {
        ...state,
        adminPost: payload,
      };
    case 'PUTPOST':

      return {
        ...state,
        adminPost: payload,
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
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    cache: 'no-cache',
  };
  axios.put(`${API}/status/${id}`, { newPost }, options)
    .then(res => {
      dispatch(updatePost(newPost));
    })
    .catch(e => {
      console.log('ERROR GET POSTS');
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
