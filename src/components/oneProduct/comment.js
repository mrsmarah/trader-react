import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../store/reducers/post';
import TextField from '@material-ui/core/TextField';
import './comment.css';


function Comment(props) {

  const [comment, setComment] = useState({});

  const handleChange = e => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    e.target.reset();
    // console.log('submit comment ', props.post.onePost._id , props.token , comment);
    await props.addComment(props.post.onePost._id, props.token, comment);
  };
  let commentArray = props.post.onePost.comment.length;
  console.log('props.post.onePost.comment', props.post.onePost.comment);
  return (
    <>
      <div id="popup1" className="overlay">
        <div className="popup">
          <a className="close" href="#">&times;</a>
          <div className="content">
            <section className='commentSection'>
              <h2 className='comments-title'>All Comments :  ({commentArray})</h2>
              {props.post.onePost.comment.map((comment, i) => {
                return (
                  <div className='container'>
                    <div className='be-comment-block'>
                      <div className='be-comment'>
                        <div className='be-img-comment'>
                          <a href='#'>
                            <img className="be-ava-comment" src={ comment.userImage ||'https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg'} />
                          </a>
                        </div>
                        <div className='be-comment-content'>
                          <span className='be-comment-name'>
                            {comment.username}
                          </span>
                          <p className="be-comment-text" >
                            {comment.theComment}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

          <form className='form-block' onSubmit={handleSubmit} >
            <div id='commentText' className='col-xs-12'>
              <div >
                <TextField
                  label="type your comment here ..."
                  name="theComment"
                  onChange={handleChange}
                  id='comment'
                  className='borderBu'
                >
                </TextField>
              </div>
            </div>
            <button id='addComment' className="hoverBtn" >Add</button>
  
                </form>
              </section>
            </div>
            </div>
            </div>

       
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
    token: state.auth.token,

  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (id, token, comment) => dispatch(addComment(id, token, comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);