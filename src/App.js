import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Main from './components/main/main.js';
import { connect } from 'react-redux';
import * as actions from './store/reducers/auth';
import * as actions2 from './store/reducers/profile';
import { getCategories } from './store/reducers/categories';
import * as actions3 from './store/reducers/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = (props) => {
 
  // componentWillMount(){
  //   first();
  // }
  useEffect(() => {
    console.log('app  --------->', props);
    props.getUser(props.user.username, props.token);
    props.getPosts(props.user.username, props.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.token]);
  useEffect(() => {
    props.load();
    props.getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch, getState) => ({
  load: () => dispatch(actions.load()),
  clear: () => actions2.clear(),
  getCategories: () => dispatch(getCategories()),
  getUser: (username, token) => dispatch(actions3.getUser(username, token)),
  getPosts: (username, token) => dispatch(actions3.getPosts(username, token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;