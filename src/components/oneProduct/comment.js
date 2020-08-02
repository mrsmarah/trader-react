import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../store/reducers/post';
import Button from '@material-ui/core/Button';
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
  console.log('props.post.onePost.comment', props.post.onePost.comment)
  return (
    <>
      <section className='commentSection'>
        <form className='form-block' onSubmit={handleSubmit} >
          <div id='commentText' className='col-xs-12'>
            <div >
              <TextField
                label="comment"
                name="theComment"
                onChange={handleChange}
                id='comment'
                className='borderBu'

              >
              </TextField>
            </div>
          </div>
          <button id='addComment' className="hoverBtn" >Add Comment</button>

        </form>

        <h2 className='comments-title'>Comments ({commentArray})</h2>
        {props.post.onePost.comment.map((comment, i) => {
          return (
            <div className='container'>
              <div className='be-comment-block'>
                <div className='be-comment'>
                  <div className='be-img-comment'>
                    <a href='#'>
                      <img className="be-ava-comment" src='https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg' />
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

      </section>
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