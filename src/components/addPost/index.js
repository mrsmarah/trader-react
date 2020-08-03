import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link, Redirect } from 'react-router-dom';
import Show from '../show';
import * as actions from '../../store/reducers/products';
import { getRemoteProduct } from '../../store/reducers/post';
// import {storage} from '../firebase/firebase';
import Form from 'react-bootstrap/Form';
import './addPost.css';
import Upload from '../upload';
const AddPost = (props) => {
  let { id } = useParams();
  // let redirectToReferrer = false ;
  const [redirect, setRedirect] = useState(false);
  const [post, setPost] = useState({});

  useEffect(() => {

    if (props.mode === 'edit') {
      let currentPost = props.posts.filter(post => post._id === id);
      setPost(currentPost[0] || {});
    }
  }, []);
  useEffect(() => {

    setPost({ ...post, images: props.images });
  }, [props.images]);

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
    //   state[e.target.name]=e.target.value ;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setRedirect(true);
    alert('New Post added !');
    console.log('submit post ', props.user.username, props.token, post);
    // const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
    if (props.mode !== 'edit') {
      console.log('adding ....');
      await props.addPost(props.user.username, props.token, post);
    } else {
      console.log('updating ....');
      props.updatePost(id, props.token, post);
    }


  };

  return (
    <>

      {(redirect === true) ? <Redirect to={`/user/${props.username}`} /> : null}
      {console.log(' props.username', props.username)}
      {console.log('add post before render -----> ', post)}
      <Show condition={props.loggedIn}>
        <Form className='login formStyle' onSubmit={handleSubmit} >
          <label className='labelForm' >ADD POST</label>
          <Form.Control
            placeholder='Title'
            name='title'
            onChange={handleChange}
            value={post.title || ''}
            className='borderBu'
          />
          <Form.Control as="textarea" rows="3" placeholder='Description' name="description"
            onChange={handleChange}
            value={post.description}
            className='borderBu' />
          {/* <Form.Control
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={post.description}
            className='borderBu'
          /> */}
          <select class="custom-select" id="inputGroupSelect01" name="categories" onChange={handleChange}
            value={post.categories}>
            <option className='catOptions' selected>Categories</option>
            {props.categories.categories.map(category => {
              return (
                <option className='catOptions' value={category.categories}>{category.categories}</option>
              );
            })}

          </select>
          <Upload />

          <Show condition={props.mode !== 'edit'}>
            <button id='signInBt2' >ADD</button>
          </Show>
          <Show condition={props.mode === 'edit'}>
            <button >update</button>
          </Show>

        </Form>


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
    images: state.upload.images,
    username: state.auth.user.username,
  };
};


const mapDispatchToProps = (dispatch, getState) => ({
  addPost: (username, token, post) => dispatch(actions.addPost(username, token, post)),
  getRemoteProduct: (id, token) => dispatch(getRemoteProduct(id, token)),
  updatePost: (id, token, post) => dispatch(actions.updatePost(id, token, post)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);