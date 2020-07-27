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
  case 'UPDATE PRODUCTS':
    console.log( type, payload);
    let products = state.products.filter(
      (product) => product.categories === payload,
    );
    console.log(products);
    return { ...state, products };
    /////////////////////////////
    
  case 'addPost':
    return {...state,post:payload||{}};
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
  type: 'UPDATE PRODUCTS',
  payload: name,
});
////////////////////////////////////


