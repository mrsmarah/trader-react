import superagent from 'superagent';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlhemFuIiwiX2lkIjoiNWVmMzBjODQwODBkMWQwMDE3MTFlMzFjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTk1OTI4NTI1LCJleHAiOjE1OTYwMTQ5MjV9.pki44LSw8Qw-lIXyuoT9hHla_bz9YGqBssksW2CQdCA';

const initialState = {
  onePost : '',
  favList : [],
};

export default (state = initialState ,action) =>{
  const { type , payload } = action;
  switch(type){
  
  case 'SELECTED':
    console.log( type, payload);
    return {...state, onePost : payload};

  case 'ADD FAV':
    console.log( type, payload);
    return {...state, favList : [ ...state.favList , payload]};

  default:
    return state;
  }
};


export const getRemoteProduct = (id)  => dispatch => {
  let api = `https://trader401.herokuapp.com/search/${id}`;
  return superagent.get(api)
    .then(data => {
    //   (console.log('DATA',data.body ));
      dispatch( getProduct(data.body));
    });
};


export const getProduct = (payload) => {
  return {
    type: 'SELECTED',
    payload: payload,
  };
};


export const addToFav = (id) => dispatch => {
  console.log('FAV PARAMETERS',id,token);
  let api = `https://trader401.herokuapp.com/addfav/${id}`;
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`},
    cache: 'no-cache',
  };
  return superagent.get(api,options)
    .then(data => {
      console.log(data.data , 'DATA BODY');
      dispatch(addFav( data.data ));
    });
};

export const addFav = (payload) => {
  return {
    type: 'ADD FAV',
    payload: payload,
  };
};




 
