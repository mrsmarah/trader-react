
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import categories from './reducers/categories';
import products from './reducers/products';
import post from './reducers/post';
import admin from './reducers/adminPageReducer';
import profile from './reducers/profile';
import auth from './reducers/auth';
import upload from './reducers/upload';

const reducers = combineReducers({ categories, products, profile, auth, post ,admin,upload  });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();