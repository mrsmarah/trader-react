import superagent from 'superagent';
import cookie from 'react-cookies';
import axios from 'axios';


const initialState = {
  onePost : {comment:[]},
};

export default (state = initialState ,action) =>{
  const { type , payload } = action;
  switch(type){
  
  case 'SELECTED':
    // console.log( type, payload);
    return {...state, onePost : payload};

  case 'GETONEPOST':
    // console.log( type, payload);
    return {...state, onePost : payload||{}};

  case 'ADD COMMENT':
    // console.log( type, payload);
    return { onePost : payload };

  default:
    return state;
  }
};


export const getRemoteProduct = (id,token='0')  => dispatch => {
  // console.log('getRemoteProduct id token------> ',id,token);
  let api = `https://trader401.herokuapp.com/search/${id}`;
  return superagent.get(api)
    .set('Content-Type', 'application/json' )
    .set('Authorization',`Bearer ${token}`)
    .then(data => {
      // (console.log('getRemoteProduct DATA -------->',data.body ));
      dispatch( getProduct(data.body));
    });
};


export const getProduct = (payload) => {
  return {
    type: 'SELECTED',
    payload: payload,
  };
};


export const addToFav = (id , token ) => dispatch => {

  // console.log('FAV PARAMETERS',id,token);
  let api = `https://trader401.herokuapp.com/addfav/${id}`;
  
  superagent.get(api)
    .set('Content-Type', 'application/json' )
    .set('Authorization',`Bearer ${token}`)
    .then(res => {
      // console.log(res.text , 'DATA BODY');
      // dispatch(addFav( res.data ));
    });
};

export const getPost = (id,token) => dispatch => {
  const API = process.env.API_URL || 'https://trader401.herokuapp.com';
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    cache: 'no-cache',
  };
  console.log('getPost---------------->', token,id);
  axios.get(`${API}/status/${id}`, options)
    .then(res => {
      console.log('res from onePostAdmin >>>>', res);
      dispatch(getOnePost(res.data[0]));
      console.log('Post Updated');
    })
    .catch(e => {
      console.log('ERROR UPDATE POSTS');
      console.error();
    });
};
export const getOnePost = (post) => {
  return {
    type: 'GETONEPOST',
    payload: post,
  };
};

export const addComment = ( id , token , comment ) => dispatch => {
  // console.log('ADD COMMENT ACTION --->', id , token , comment );
  let api = `https://trader401.herokuapp.com/comment/${id}`;
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`},
    cache: 'no-cache',
  };
  axios.post(api,comment,options)
    .then(data => {
      // console.log('comment ------>',data.data );
      dispatch(addCommentAction( data.data ));
    });
};

export const addCommentAction = (payload) => {
  return {
    type: 'ADD COMMENT',
    payload: payload,
  };
};


export const ratePost = ( id , token , rate ) => dispatch => {
  console.log('INSIDE RATE ACTION --->', id , token , rate );
  let api = `https://trader401.herokuapp.com/rate/${id}`;
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`},
    cache: 'no-cache',
  };
  axios.post(api,rate,options)
    .then(data => {
      console.log('RATE DATA ------>',data.data );
      // dispatch(rateAction( data.data ));
    });
};

export const rateAction = (payload) => {
  return {
    type: 'RATE',
    payload: payload,
  };
};




 
