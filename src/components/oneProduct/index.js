import React , { useEffect } from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getRemoteProduct,getPost } from '../../store/reducers/post';
import Show from '../show';
import {addToFav } from '../../store/reducers/post';
import Comment from './comment.js';
import { Link } from 'react-router-dom';
import {getRooms} from '../../store/reducers/chat-Reducer';


function OneProduct (props){
  
  
  let{id} = useParams();
  console.log('ONEEEE---------------->', props.post,id);
  useEffect(() => {
    if(props.show === 'admin'){
      props.getPost(id,props.token);
    }else{
      props.getRemoteProduct(id);
    }
    
  }, []);
  

  return (
    <section>
     
      <span>{props.post.onePost.title}</span>
      <p>POSTED BY :{props.post.onePost.username} </p>
      <p>PRICE : {props.post.onePost.price} </p>
      <p>DESCRIPTION :{props.post.onePost.description} </p>
      <p>CATEGORY :{props.post.onePost.categories} </p>

      
      <Show condition={props.show !== 'admin'}>
        <section className="btnn">

          <button onClick={ () =>{
            props.addToFav(props.post.onePost._id , props.token );
          }} variant="light">Add To Favorite</button> 
        
          <button variant="light"><Link to={`/chat/${props.post.onePost.username}`}>Chat</Link></button>


          <Comment />

        </section>
      </Show>
    </section>
  );
}

const mapStateToProps = (state) =>{
  return {post : state.post,
    token : state.auth.token,
    rooms : state.rooms.chatRooms ,

  };
} ;

const mapDispatchToProps = (dispatch) => ({
  getRemoteProduct: (id) => dispatch(getRemoteProduct(id) ),
  getRooms:(token) => dispatch(getRooms(token)),
  addToFav: (id ,token ) => dispatch(addToFav(id ,token)),
  getPost:(id ,token ) => dispatch(getPost(id ,token)),
});

export default connect(mapStateToProps , mapDispatchToProps )( OneProduct );