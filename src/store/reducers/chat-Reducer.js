import axios from 'axios';

let initialState = {
  chatRooms: [],
  messages:[],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
    
  switch (type) {
    
  case 'GET ROOMS':
    console.log(type, payload);
    return { ...state, chatRooms: payload };

  case 'GET MESSAGES':
    console.log(type, payload);
    return { ...state, messages: payload };
    
  default:
    return state;
  }
};


export const getRooms = (token) => dispatch => {
  let api = `https://trader401.herokuapp.com/chat`;
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`},
    cache: 'no-cache',
  };
  axios.get(api,options)
    .then(data => {
      console.log('CHAT ROOMS DATA >>>>>>>>>>>>>>>',data.data);
      dispatch(getRoomsAction( data.data ));
    });
};

export const getRoomsAction = (payload) => {
  return {
    type: 'GET ROOMS',
    payload: payload,
  };
};

export const getMessages = (payload) => {
  return {
    type: 'GET MESSAGES',
    payload: payload,
  };
};