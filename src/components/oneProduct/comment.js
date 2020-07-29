import React , { useEffect,useState } from 'react';
import {connect} from 'react-redux';
import {addComment} from '../../store/reducers/post';


function Comment (props){

  const[comment, setComment]= useState({});

  const handleChange = e => {
    setComment({...comment,[e.target.name]:e.target.value});
  };
      
  const handleSubmit = async e => {
    e.preventDefault();
    e.target.reset();
    // console.log('submit comment ', props.post.onePost._id , props.token , comment);
    await props.addComment( props.post.onePost._id , props.token , comment);
  };

  return (
    <section>
      
      <ul>
        {props.post.onePost.comment.map((comment,i) =>{
          return(
            <li>
              <p>{comment.username}</p>
              <p>{comment.theComment}</p>
            </li>
          );
        })}
      </ul>

      <form onSubmit={handleSubmit} >

        <input
          placeholder="comment"
          name="theComment"
          onChange={handleChange}
        />

        <button >Add Comment</button> 

      </form>

    </section>
  );
}

const mapStateToProps = (state) =>{
  return {post : state.post,
    token : state.auth.token,
  
  };
} ;

const mapDispatchToProps = (dispatch) => ({
  addComment: ( id , token , comment )  => dispatch(addComment( id , token , comment ) ),
});

export default connect(mapStateToProps , mapDispatchToProps )( Comment );