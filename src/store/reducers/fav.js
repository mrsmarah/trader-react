import superagent from 'superagent';
import axios from 'axios';


export const addToFav = (id,token,post) => dispatch => {
  console.log('FAV PARAMETERS',id,token);
  let api = `https://trader401.herokuapp.com/addfav/${id}`;
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`},
    cache: 'no-cache',
  };
  axios.get(api,options)
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