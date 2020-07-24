import superagent from 'superagent';

const initialState = {
    products : [ ],
}
export default (state = initialState ,action) =>{
    const { type , payload } = action;
    switch(type){
        case 'ACTIVE' :
            let products = state.products.filter(product=> product.category === payload) ;
            return {products :  products};

        case 'GET':
            state.products = [...payload];
            return {
                ...state,
                products:state.products
            };
    }
}
export const active = (categoryName) => {
    return {
        type : 'ACTIVE',
        payload : categoryName,
    }
}

export const getProducts = () => dispatch => {
    let api = 'https://trader401.herokuapp.com/all';
    return superagent.get(api)
      .then(data => {
        dispatch(getActionProducts(data.body))
      });
  }

  export const getActionProducts = payload => {
    return {
      type: 'GET',
      payload: payload
    }
  }