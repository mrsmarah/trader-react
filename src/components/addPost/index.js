import React,{useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Show from '../show';
import * as actions from '../../store/reducers/products';
import {getRemoteProduct } from '../../store/reducers/post';
import cookie from 'react-cookies';

const AddPost = (props) =>{
  let{id} = useParams();
  props.getRemoteProduct(id); 
  const[post, setPost]=useState({});
  console.log('hi from add post',post,id);
 


  useEffect(() => {
    if(props.mode==='edit'){
       
      console.log('hi from add post props.post',props.post,id);
      return setPost(props.post.onePost);
      
    }
  },[]);
  
  const handleChange = e => {
    setPost({...post,[e.target.name]:e.target.value});
    //   state[e.target.name]=e.target.value ;
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    console.log('submit post ', props.user.username,cookie.load('auth'),post);
    await props.addPost( props.user.username,props.token,post);
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
      <Show condition={props.loggedIn}>
        <form onSubmit={handleSubmit} >
          <input
            placeholder="title"
            name="title"
            onChange={handleChange}
            value = {post.title}
          />
          <input
            placeholder="description"
            name="description"
            onChange={handleChange}
            value = {post.description}
          />
  
          <input
            placeholder="images"
            name="images"
            onChange={handleChange}
            value = {post.images}
          />

          <select class="custom-select" id="inputGroupSelect01" name="categories" onChange={handleChange} 
            value = {post.categories}>
            <option selected>categories</option>
            { props.categories.categories.map(category => {
              return (
                <option value={category.categories}>{category.categories}</option>
              );
            })}
           
          </select>
  
  
          <button>ADD</button>
        </form>
      </Show>
    </>
  );
    
  
};
  
const mapStateToProps = (state) => {
  console.log('state------>',state);
  return { 
    loggedIn: state.auth.loggedIn,
    user:  state.auth.user ,
    categories: state.categories,
    token: state.auth.token,
    post : state.post,
  };
};
    
    
const mapDispatchToProps = (dispatch, getState) => ({
  addPost: (username,token ,post) => dispatch(actions.addPost(username,token ,post)),
  getRemoteProduct: (id) => dispatch(getRemoteProduct(id) ),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);