import React,{useState } from 'react';
import { connect } from 'react-redux';
import Show from '../show';
import * as actions from '../../store/reducers/products';

const AddPost = (props) =>{
  const[post, setPost]=useState({});
  console.log('hi from add post',post);
  
  
  
  const handleChange = e => {
    setPost({...post,[e.target.name]:e.target.value});
    //   state[e.target.name]=e.target.value ;
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    console.log('submit post ', props.user.username , props.token ,post);
    await props.addPost( props.user.username, props.token ,post);
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
          />
          <input
            placeholder="description"
            name="description"
            onChange={handleChange}
          />
  
          <input
            placeholder="images"
            name="images"
            onChange={handleChange}
          />

          <select class="custom-select" id="inputGroupSelect01" name="categories" onChange={handleChange}>
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
  };
};
    
    
const mapDispatchToProps = (dispatch, getState) => ({
  addPost: (username,token ,post) => dispatch(actions.addPost(username,token ,post)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);