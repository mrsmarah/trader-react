import superagent from 'superagent';

const initialState = {
  onePost : '',
};

export default (state = initialState ,action) =>{
  const { type , payload } = action;
  switch(type){
  
  case 'SELECTED':
    console.log( type, payload);
    return {...state, onePost : payload};

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



 
