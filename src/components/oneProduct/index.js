import React , { useEffect } from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getRemoteProduct } from '../../store/reducers/post';
import {addToFav } from '../../store/reducers/post';
import Comment from './comment.js';


function OneProduct (props){

  console.log('ONEEEE', props.post);
  
  let{id} = useParams();

  useEffect(() => {
    props.getRemoteProduct(id);
  }, []);
  

  return (
    <section>
     
      <span>{props.post.onePost.title}</span>
      <p>POSTED BY :{props.post.onePost.username} </p>
      <p>PRICE : {props.post.onePost.price} </p>
      <p>DESCRIPTION :{props.post.onePost.description} </p>
      <p>CATEGORY :{props.post.onePost.categories} </p>
      
      <section className="btnn">

        <button onClick={ () =>{
          props.addToFav(props.post.onePost._id , props.token );
        }} variant="light">Add To Favorite</button> 
        
        <button variant="light">Chat</button>

        <Comment />

      </section>
       
    </section>
  );
}

const mapStateToProps = (state) =>{
  return {post : state.post,
    token : state.auth.token,
  
  };
} ;

const mapDispatchToProps = (dispatch) => ({
  getRemoteProduct: (id) => dispatch(getRemoteProduct(id) ),
  addToFav: (id ,token ) => dispatch(addToFav(id ,token)),
});

export default connect(mapStateToProps , mapDispatchToProps )( OneProduct );