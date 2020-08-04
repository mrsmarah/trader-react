import axios from 'axios';

let initialState = {
  chatRooms: [],
  messages:[],
  usersImage:{},
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
    case 'UsersImages':
      console.log('images payload---->',payload );
    return { ...state, usersImage: payload };
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
  let images = {};
  axios.get(api,options)
    .then(async data => {
      console.log('CHAT ROOMS DATA >>>>>>>>>>>>>>>',data.data);
      
      // firstUser: "ahmadkmal", secondUser: "ahmad",
      
      // await data.data.forEach(room => {
      //   if(!images[room.firstUser]){
      //     let api = `https://trader401.herokuapp.com/user/${room.firstUser}`;
      //     axios.get(api, options)
      //       .then(data2 => {
      //         console.log('getuser image',data2.data.user);
      //         images[room.firstUser] = data2.data.user.usersImage||'nan';
      //       });
      //   }
      //   if(!images[room.secondUser]){
      //     let api = `https://trader401.herokuapp.com/user/${room.secondUser}`;
      //     axios.get(api, options)
      //       .then(data2 => {
      //         console.log('getuser image',data2.data.user);
      //         console.log('images fill--->',images);
      //         images[room.secondUser] = data2.data.user.userImage||'nan';
      //       });
      //   }
        
      // });
      // dispatch(setUsersImages( images ));
      dispatch(getRoomsAction( data.data ));
      // dispatch(setUsersImages( images ));
      console.log('images---->',images);
      
    });
};
export const setUsersImages = (payload) => {
  return {
    type: 'UsersImages',
    payload: payload,
  };
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