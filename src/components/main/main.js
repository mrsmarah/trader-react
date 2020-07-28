import React, { useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
import Categories from '../categories/categories.js';
import Products from '../products';
import OneProduct from '../oneProduct';
import OneCategory from '../oneCategory/oneCategory';
import Profile from '../profile';
import Signup from '../signup';
import Login from '../login';
import Auth from '../auth';
import AddPost from '../addPost';
import { connect } from 'react-redux';
import * as actions from '../../store/reducers/auth';
import * as actions2 from '../../store/reducers/profile';
import { getCategories } from '../../store/reducers/categories';
const Main = (props) => {
  props.load();
  useEffect(() => {

    props.getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Route exact path="/">
        <Categories />
        <Products />
      </Route>

      <Route exact path="/searchBy/:category" >
        <OneCategory />
        <Products productsKey='FILTER' />
      </Route>

      <Route exact path="/search/:id">
        <OneProduct />
      </Route>

      <Route exact path="/user/:username">
        <Profile />
      </Route>

      <Route exact path="/log">
        <Signup />
        <Login />
      </Route>

      <Route exact path="/post">
        <AddPost />
      </Route>

      <Route exact path="/favList">
        <Products productsKey='fav' />
      </Route>


    </>
  );
};

const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch, getState) => ({
  load: () => dispatch(actions.load()),
  clear: () => actions2.clear(),
  getCategories: () => dispatch(getCategories()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);