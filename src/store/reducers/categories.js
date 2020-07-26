import superagent from 'superagent';

let initialState = {
  categories: [],
  activeCategory: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
    
  switch (type) {
    
  case 'UPDATE ACTIVE CATEGORY':
    console.log('PAYLOAD ACTIVE', payload);
    return { ...state, activeCategory: payload };
    
  case 'GET CATEGIRIES':
    // console.log('PAYLOAD get cat',payload.results);
    return { ...state, categories: payload.results };
    
  default:
    return state;
  }
};

const api = 'https://trader401.herokuapp.com/categories';

export const getCategories = function () {
  return (dispatch) => {
    return superagent
      .get(api)
      .then((response) => {
        // console.log('get api response:', response.body);
        dispatch(getCategory({ results: response.body }));
      });
  };
};

export const handelCategory = (name) => ({
  type: 'UPDATE ACTIVE CATEGORY',
  payload: name,
});
    

export const getCategory = (response) => ({
  type: 'GET CATEGIRIES',
  payload: response,
});

// export const handelProduct = (name) => ({
//   type: 'UPDATE PRODUCTS',
//   payload: name,
// });

