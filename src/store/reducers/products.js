import superagent from 'superagent';

const initialState = {
    products : [],
}
export default (state = initialState ,action) =>{
    const { type , payload } = action;
    switch(type){
        case 'ACTIVE' :
            // let products = initialState.products.filter(product=> product.category === payload) ;
            return {products :  products};
        case 'setPosts':
            let products = initialState.products
            return {...state,products : payload};
        case 'GET':
            console.log('GET', payload);
            return payload;
        default:
             return state;
    }
}
// export const active = (categoryName) => {
//     return {
//         type : 'ACTIVE',
//         payload : categoryName,
//     }
// }

// export const getPosts  = dispatch => {
//     let api = `https://trader401.herokuapp.com/all`;
//     return superagent.get(api)
//       .then(data => {
//           (console.log(data.body , 'daata.body'))
//           dispatch(setPosts(data.body));
//       });
//   };

//   export const setPosts = payload => {
//     return {
//       type: 'setPosts',
//       payload: payload,
//     };
//   };

  export const getRemoteData = function () {
    let api = `https://trader401.herokuapp.com/all`;
    return (dispatch) => {
      return superagent.get(api).then((response) => {
        dispatch(getAction({ products: response.body }));
      });
    };
  };
  
  
  export const getAction = (payload) => {
    return {
      type: 'GET',
      payload: payload,
    };
  };