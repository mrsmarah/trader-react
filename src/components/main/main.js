import React , { useEffect }from 'react';
import { Route } from 'react-router-dom';
import Categories from '../categories/categories.js';
import Products from '../products';
import Profile from '../profile';
import Signup from '../signup';
import Login from '../login';
import Auth from '../auth';
import { connect } from 'react-redux';
import * as actions from '../../store/reducers/auth'; 

const  Main= (props) => {
  useEffect(() => {
    props.load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
const mapStateToProps = (state) => {
  return { 
        
  };
};
const mapDispatchToProps = (dispatch, getState) => ({
  load: () => dispatch(actions.load()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);

