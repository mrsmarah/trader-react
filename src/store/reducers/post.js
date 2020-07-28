import superagent from 'superagent';
import cookie from 'react-cookies';
import axios from 'axios';


const initialState = {
  onePost : '',
};

export default (state = initialState ,action) =>{
  const { type , payload } = action;
  switch(type){
  
  case 'SELECTED':
    console.log( type, payload);
    return {...state, onePost : payload};

    // case 'ADD FAV':
    //   console.log( type, payload);
    //   return {...state, favList : [ ...state.favList , payload]};

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

  console.log('FAV PARAMETERS',id,token);
  let api = `https://trader401.herokuapp.com/addfav/${id}`;
  
  superagent.get(api)
    .set('Content-Type', 'application/json' )
    .set('Authorization',`Bearer ${token}`)
    .then(res => {
      console.log(res.text , 'DATA BODY');
      // dispatch(addFav( res.data ));
    });
};

// export const addFav = (payload) => {
//   return {
//     type: 'ADD FAV',
//     payload: payload,
//   };
// };




 
