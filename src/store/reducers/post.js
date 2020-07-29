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

    // case 'ADD FAV':
    //   console.log( type, payload);
    //   return {...state, favList : [ ...state.favList , payload]};

  case 'ADD COMMENT':
    // console.log( type, payload);
    return { onePost : payload };
    // return { onePost : {...state.onePost , comment:[...state.onePost.comment , payload] } };

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

// export const addFav = (payload) => {
//   return {
//     type: 'ADD FAV',
//     payload: payload,
//   };
// };

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



 
