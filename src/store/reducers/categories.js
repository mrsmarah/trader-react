import superagent from 'superagent';

let initialState = {
  categories: [],
  activeCategory: '',
  activeCategoryImg: '',
  
};

export default (state = initialState, action) => {
  const { type, payload } = action;
    
  switch (type) {
    
  case 'UPDATE ACTIVE CATEGORY':
    console.log('PAYLOAD ACTIVE', payload.name , payload.img);
    return { ...state, activeCategory: payload.name , activeCategoryImg : payload.img };
    
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

export const handelCategory = (name , img ) => ({
  type: 'UPDATE ACTIVE CATEGORY',
  payload: {name : name, img : img},
});
    

export const getCategory = (response) => ({
  type: 'GET CATEGIRIES',
  payload: response,
});

// export const handelProduct = (name) => ({
//   type: 'UPDATE PRODUCTS',
//   payload: name,
// });

