import superagent from 'superagent';
import axios from 'axios';
const initialState = {
  products : [],
  post:{},
};

export default (state = initialState ,action) =>{
  const { type , payload } = action;
  switch(type){
  case 'GET':
    return {...state,products : payload};
    ////////////////////// MARAH
  case 'FILTER PRODUCTS':
    console.log( type, payload);
    return { ...state, products : payload };
    /////////////////////////////
    
  case 'addPost':
    return {...state,post:payload||{}};

    // case 'SELECTED':
    //   console.log( type, payload);
    //   return {...state,products : payload};
  case 'favAction':
    return {...state,products:payload||[]};
    
  default:
    return state;
  }
};

export const getRemoteData = () => dispatch => {
  let api = `https://trader401.herokuapp.com/all`;
  return superagent.get(api)
    .then(data => {
      //   (console.log(data.body , 'daata.body'))
      dispatch(getAction( data.body ));
    });
};
export const addPost = (username,token,post) => dispatch => {
  console.log('addPost from redux --->',username,token,post);
  let api = `https://trader401.herokuapp.com/user/${username}`;
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`},
    cache: 'no-cache',
  };
  axios.post(api,post,options)
    .then(data => {
      console.log(data.data , '<--------data.body  add post axios');
      dispatch(addPostAction( data.data ));
    });
};


export const getFav = (username,token) => dispatch => {
  console.log('gatvaf from redux --->',username,token);
  let api = `https://trader401.herokuapp.com/user/${username}`;
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`},
    cache: 'no-cache',
  };
  axios.get(api,options)
    .then(data => {
      console.log(data.data , '<--------data.body  favlist  axios');
      dispatch(favAction( data.data.data ));
    });
};
export const favAction = (payload) => {
  return {
    type: 'favAction',
    payload: payload,
  };
};
//////////////////////////// MARAH
export const getFilteredProducts = (category) => dispatch => {
  let api = `https://trader401.herokuapp.com/searchBy/${category}`;
  return superagent.get(api)
    .then(data => {
      dispatch(handelProduct( data.body ));
    });
};
///////////////////////////////

// export const getRemoteProduct = (id)  => dispatch => {
//   let api = `https://trader401.herokuapp.com/search/${id}`;
//   return superagent.get(api)
//     .then(data => {
//       // (console.log(data.body , 'daata.body'))
//       dispatch( getProduct(data.body));
//     });
// };


export const getAction = (payload) => {
  return {
    type: 'GET',
    payload: payload,
  };
};
export const addPostAction = (payload) => {
  return {
    type: 'addPost',
    payload: payload,
  };
};

///////////////////////////////// MARAH
export const handelProduct = (name) => ({
  type: 'FILTER PRODUCTS',
  payload: name,
});
////////////////////////////////////


// export const getProduct = (payload) => {
//   // console.log(payload)
//   return {
//     type: 'SELECTED',
//     payload: payload,
//   };
// };
