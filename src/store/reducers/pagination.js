let initialState = {
  currentPage:1,
 
};
  
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

  case 'PAGINATION':
    return { ...state, ...payload };

  default:
    return state;
  }
};

export const getPagination = function (currentPage) {
  return (dispatch) => { 
    console.log('PAGINATION ACTION >>>>>> ',currentPage);
    dispatch(paginationAction({ currentPage}));
  };
};

export const paginationAction = (payload) => ({
  type: 'PAGINATION',
  payload: payload,
});
  