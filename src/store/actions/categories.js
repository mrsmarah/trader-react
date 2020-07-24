import superagent from 'superagent';

const api = 'https://trader401.herokuapp.com/categories';

export const getRemoteData = function () {
  return (dispatch) => {
    return superagent
      .get(api)
      .set('Content-Type', 'application/json')
      .then((response) => {
        dispatch(getCategory({ results: response.body }));
      });
  };
};

export const handelCategory = (name) => ({
  type: 'UPDATE ACTIVE CATEGORY',
  payload: name,
});
    

export const getCategory = (response) => ({
  type: 'ADD GETOGRY',
  payload: response,
});
