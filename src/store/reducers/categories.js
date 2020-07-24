let initialState = {
  categories: [],
  activeCategory: '',
};
export default (state = initialState, action) => {
  const { type, payload } = action;
    
  switch (type) {
    
  case 'UPDATE ACTIVE CATEGORY':
    return { ...state, activeCategory: payload };
    
  case 'ADD GETOGRY':
    return { ...state, categories: payload.results.results };
    
  default:
    return state;
  }
};