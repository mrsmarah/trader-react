import React , { useEffect } from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getRemoteProduct,getPost } from '../../store/reducers/post';
import Show from '../show';
import {addToFav } from '../../store/reducers/post';
// import Comment from './comment.js';


function StateHeader (props){
  
  
  let{id} = useParams();
  console.log('ONEEEE state---------------->', props.post,id);
  useEffect(() => {

  }, []);
  

  return (
    <section>
     
      <span>state:</span>
      <p>deleted :{props.post.onePost.deleted?'yes':'no'} </p>
      <p>status : {props.post.onePost.status} </p>
    
     
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
  getPost:(id ,token ) => dispatch(getPost(id ,token)),
});

export default connect(mapStateToProps , mapDispatchToProps )( StateHeader );