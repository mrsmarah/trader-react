import React , { useEffect } from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getRemoteProduct } from '../../store/reducers/post';

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
        <button variant="light">Add To Favorite</button> 
        <button variant="light">Chat</button>
      </section>
       
    </section>
  );
}

const mapStateToProps = (state) =>{
  return {post : state.post};
} ;

const mapDispatchToProps = (dispatch) => ({
  getRemoteProduct: (id) => dispatch(getRemoteProduct(id) ),
});
export default connect(mapStateToProps , mapDispatchToProps )( OneProduct );