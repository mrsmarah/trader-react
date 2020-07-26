import React from 'react';
import { Route } from 'react-router-dom';
import Categories from '../categories/categories.js';
import Products from '../products';
import Profile from '../profile';
import Signup from '../signup';
import Login from '../login';
// import Auth from '../auth';


function Main() {
  return (
    <>
      <Route exact path="/">
        <Categories />
        <Products />
      </Route>
      
      <Route exact path="/profile">
        <Profile />
      </Route>

      <Route exact path="/log">
        <Signup />
        <Login />
      </Route>

     
    </>
  );
}

export default Main;
