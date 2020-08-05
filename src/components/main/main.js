import React, { useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
import Categories from '../categories/categories.js';
import Products from '../products';
import OneProduct from '../oneProduct';
import OneCategory from '../oneCategory/oneCategory';
import Profile from '../profile';
import Signup from '../signup';
import Admin from '../adminPage';
import Chat from '../chats/chats';
import ChatMessages from '../chats/messages';
import ClientComponent from '../chat/index';
import Login from '../login';
import Auth from '../auth';
import AddPost from '../addPost';
import { connect } from 'react-redux';
import * as actions from '../../store/reducers/auth';
import * as actions2 from '../../store/reducers/profile';
import AdminState from '../oneProduct/stateHeader';
import { getCategories } from '../../store/reducers/categories';
import PaginationComponent from '../pagination/pagination';

const Main = (props) => {
  props.load();

  
  useEffect(() => {
    window.scrollTo(0, 0);
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
        {/* <Signup /> */}
        <Login />
        {/* <Providers /> */}
      </Route>

      <Route exact path="/post">
        <AddPost />
      </Route>

      <Route exact path="/favList">
        <Products productsKey='fav' />
      </Route>

      <Route exact path="/admin">
        <Auth capability='admin'>
          <Admin />
        </Auth>
      </Route>

      <Route exact path="/edit/:id">
        <AddPost mode='edit' />
      </Route>

      <Route exact path="/status/:id">
        <Auth capability='admin'>
          {/* <AdminState /> */}
          <OneProduct show='admin' />
        </Auth>
      </Route>

      <Route exact path="/chat">
        <Chat />
      </Route>

      <Route exact path="/chat/:username">

        {/* <Chat/> */}
        <ClientComponent /> 

      </Route>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};
const mapDispatchToProps = (dispatch, getState) => ({
  load: () => dispatch(actions.load()),
  clear: () => actions2.clear(),
  getCategories: () => dispatch(getCategories()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);