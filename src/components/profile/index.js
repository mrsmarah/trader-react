import React , { useEffect }from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/profile';
import Post from '../post'; 

const Main = (props) => {
  useEffect(() => {
    props.getUser(props.username);
    props.getPosts(props.username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    props.posts.map(post=>{
      return(    
        <Post key={post.id} data={post} />
      );
    })
  );
};

const mapStateToProps = (state) => {
  console.log('state------>',state);
  return { 
    user: state.profile.user,
    posts:  state.profile.posts ,
    username: state.user.username,
  };
};


const mapDispatchToProps = (dispatch, getState) => ({
  getUser: (username) => dispatch(actions.getUser(username)),
  getPosts: (username) => dispatch(actions.getPosts(username)),
});

// const mapDispatchToProps = { select };
export default connect(mapStateToProps, mapDispatchToProps)(Main);
