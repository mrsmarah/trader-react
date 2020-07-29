import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Show from '../show';
import * as actions from '../../store/reducers/products';
import { getRemoteProduct } from '../../store/reducers/post';
import cookie from 'react-cookies';
import Button from '@material-ui/core/Button';
import './addPost.css';
import TextField from '@material-ui/core/TextField';
const AddPost = (props) => {
  let { id } = useParams();

  const [post, setPost] = useState({});
  //   if(props.mode==='edit'){
  //     let currentPost = props.posts.filter(post=>post._id === id) ;
  //     setPost(currentPost);
  //   }
  //   console.log('hi from add post post , id------>',post,id,props);



  useEffect(() => {
    if (props.mode === 'edit') {
      let currentPost = props.posts.filter(post => post._id === id);
      setPost(currentPost[0] || {});
    }
  }, []);

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
    //   state[e.target.name]=e.target.value ;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('submit post ', props.user.username, props.token, post);
    if (props.mode !== 'edit') {
      console.log('adding ....');
      await props.addPost(props.user.username, props.token, post);
    } else {
      console.log('updating ....');
      props.updatePost(id, props.token, post);
    }


  };

  //   "images": [],
  //   "status": "pending",
  //   "deleted": false,
  //   "positiveRateUser": [],
  //   "negativeRateUser": [],
  //   "_id": "5ef312b8080d1d001711e320",
  //   "title": "honda civic ",
  //   "description": "2000 in good condition 1.5L ABS ",
  //   "categories": "car",
  //   "username": "ahmad",
  //   "comment": [],
  //   "__v": 0
  return (
    <>
      {console.log('add post before render -----> ', post)}
      <Show condition={props.loggedIn}>
        <form onSubmit={handleSubmit} >
          <TextField
            label="title"
            name="title"
            onChange={handleChange}
            value={post.title || ''}
          >
          </TextField>
          <TextField
            label="description"
            name="description"
            onChange={handleChange}
            value={post.description}
          >
          </TextField>
          <TextField
            label="images"
            name="images"
            onChange={handleChange}
            value={post.images}
          >
          </TextField>
          <select class="custom-select" id="inputGroupSelect01" name="categories" onChange={handleChange}
            value={post.categories}>
            <option selected>categories</option>
            {props.categories.categories.map(category => {
              return (
                <option value={category.categories}>{category.categories}</option>
              );
            })}

          </select>

          <Show condition={props.mode !== 'edit'}>
            <button>ADD</button>
          </Show>
          <Show condition={props.mode === 'edit'}>
            <button >update</button>
          </Show>

        </form>


      </Show>
    </>
  );


};

const mapStateToProps = (state) => {
  console.log('state------>', state);
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user,
    categories: state.categories,
    token: state.auth.token,
    posts: state.profile.posts,
  };
};


const mapDispatchToProps = (dispatch, getState) => ({
  addPost: (username, token, post) => dispatch(actions.addPost(username, token, post)),
  getRemoteProduct: (id, token) => dispatch(getRemoteProduct(id, token)),
  updatePost: (id, token, post) => dispatch(actions.updatePost(id, token, post)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);