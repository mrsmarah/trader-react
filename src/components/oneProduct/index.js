import React , { useEffect } from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getRemoteProduct,getPost } from '../../store/reducers/post';
import Show from '../show';
import {addToFav } from '../../store/reducers/post';
import Comment from './comment.js';
import { Link } from 'react-router-dom';
import {getRooms} from '../../store/reducers/chat-Reducer';
import Slider from './slider/slider.js'
import './oneProduct.scss'
import { MDBIcon,MDBBtn } from 'mdbreact';
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
      <div className="sliderProduct">
        <Slider/>
        <div className="details">
          <div className='heart'>
            <h2>{props.post.onePost.title}</h2>
            <MDBIcon
              icon='heart'
              className='cyan-text'
              size='3x'
              style={{ cursor: 'pointer' }}
              onClick={ () =>{
                props.addToFav(props.post.onePost._id , props.token );
                alert('Post added to your favorite list !');
              }}
            />
          </div>
          <hr/>
          <p>{props.post.onePost.description} </p>
          <span className="dolar"> {props.post.onePost.price || '55'}$ </span>
          <hr/>
          <div className="user-cat">
            <span> BY: {props.post.onePost.username} 
              <MDBBtn
                type="submit"
                className="fancy-button">
                <Link to={`/chat/${props.post.onePost.username}`}>
                  <span class="fancy-button-text">Chat</span>
                  <span class="fancy-button-background">&nbsp;</span>
                  <MDBIcon icon="paper-plane" />
                </Link>
              </MDBBtn> </span><br/>
            <span>Category Type: {props.post.onePost.categories} </span>
          </div>
        </div>
      </div>
      <Show condition={props.show !== 'admin'}>
        <section className="btnn">

          {/* <button onClick={ () =>{
            props.addToFav(props.post.onePost._id , props.token );

          }} variant="light">Add To Favorite</button>  */}

          {/* <button variant="light"><Link to={`/chat/${props.post.onePost.username}`}>Chat</Link></button> */}


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