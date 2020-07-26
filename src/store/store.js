import { createStore, combineReducers,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import categories from './reducers/categories';
import products from './reducers/products';
// import auth from './reducers/auth';
import profile from './reducers/profile';
import auth from './reducers/auth';

const reducers = combineReducers({ categories , products , profile ,auth});


const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
