import superagent from 'superagent';


const initialState = {
  user: {},
  posts: [
  ],
  

};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log('action ---->',payload,type);
  switch (type) {
  case 'setUser':
    return {...state,user : payload};
  case 'setPosts':
    return {...state,posts : payload};
 
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
  return superagent.get(api)
    .then(data => {
      dispatch(setUser(data.user));
    });
};

export const setUser = payload => {
  return {
    type: 'setUser',
    payload: payload,
  };
};

export const getPosts = (username) => dispatch => {
  let api = `https://trader401.herokuapp.com/user/${username}`;
  return superagent.get(api)
    .then(data => {
      dispatch(setPosts(data.body));
    });
};

export const setPosts = payload => {
  return {
    type: 'setPosts',
    payload: payload,
  };
};