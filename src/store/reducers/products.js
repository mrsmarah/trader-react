import superagent from 'superagent';

const initialState = {
    products : [],
}
export default (state = initialState ,action) =>{
    const { type , payload } = action;
    switch(type){
        case 'GET':
            return {...state,products : payload};
        case 'SELECTED':
            return {...state,products : payload};
        default:
             return state;
    }
}

export const getRemoteData = () => dispatch => {
    let api = `https://trader401.herokuapp.com/all`;
    return superagent.get(api)
      .then(data => {
        //   (console.log(data.body , 'daata.body'))
          dispatch(getAction( data.body ));
      });
  };

  export const getRemoteProduct = (id)  => dispatch => {
    let api = `https://trader401.herokuapp.com/search/${id}`;
    return superagent.get(api)
      .then(data => {
        //   (console.log(data.body , 'daata.body'))
          dispatch( getProduct( data.body ));
      });
  };
  
  
  export const getAction = (payload) => {
    return {
      type: 'GET',
      payload: payload,
    };
  };

  export const getProduct = (payload) => {
    return {
      type: 'SELECTED',
      payload: payload,
    };
  };