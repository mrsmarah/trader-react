let initialState = {
  currentPage:1,
  itemPerPage:3,
  currentItems: [],
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

export const getPagination = function (currentPage, itemPerPage, currentItems) {
  return (dispatch) => { 
    console.log('PAGINATION ACTION >>>>>> ',currentPage, itemPerPage, currentItems);
    dispatch(paginationAction({ currentPage, itemPerPage, currentItems }));
  };
};

export const paginationAction = (payload) => ({
  type: 'PAGINATION',
  payload: payload,
});
  