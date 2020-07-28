import React , { useEffect } from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getRemoteProduct } from '../../store/reducers/post';
import {addToFav } from '../../store/reducers/post';


function Comment (props){

  console.log('ONEEEE', props.post);
  
  let{id} = useParams();

  useEffect(() => {
    props.getRemoteProduct(id);
  }, []);
  

  return (
    <section>
     
        <section>
          {props.post.onePost.comment.map((comment,i) =>{
            <ul>
              <li>
                <p>{comment.username}</p>
                <p>{comment.theComment}</p>
              </li>
            </ul>;
          })}
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

export default connect(mapStateToProps , mapDispatchToProps )( Comment );