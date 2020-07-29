import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRemoteProduct, getPost } from '../../store/reducers/post';
import Show from '../show';
import { addToFav } from '../../store/reducers/post';
import Comment from './comment.js';
import { MDBIcon } from 'mdbreact';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom';
function OneProduct(props) {


  let { id } = useParams();
  console.log('ONEEEE---------------->', props.post, id);
  useEffect(() => {
    if (props.show === 'admin') {
      props.getPost(id, props.token);
    } else {
      props.getRemoteProduct(id);
    }

  }, []);


  return (


    <>

      <Show condition={props.show !== 'admin'}>

        <div className="grid">
          <div class="hover">

            <img className='firstPic' variant="top" src="https://via.placeholder.com/300" />
            <img className='secPic' variant="top" src="https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350-300x300.png" />
          </div>
          <Card style={{ width: '18rem' }} >
            <Card.Body>
              <Card.Title>
                <h3>
                  {props.post.onePost.title}
                </h3></Card.Title>
              <Card.Text>
                <h5>
                  POSTED BY: <br />
                </h5>
                {props.post.onePost.username}
              </Card.Text>
              <Card.Text>
                <h5>
                  DESCRIPTION: <br />
                </h5>
                {props.post.onePost.description}
              </Card.Text>


              <section className="btnn">

                <Button variant="light" className="hoverBtn" >Add To Favorite</Button>
                <Button variant="light" className="hoverBtn" >Chat</Button>
              </section>
            </Card.Body>
          </Card>
        </div>
        <Comment />

      </Show>
      {/* <section>

        <span>{props.post.onePost.title}</span>
        <p>POSTED BY :{props.post.onePost.username} </p>
        <p>PRICE : {props.post.onePost.price} </p>
        <p>DESCRIPTION :{props.post.onePost.description} </p>
        <p>CATEGORY :{props.post.onePost.categories} </p>
        <Show condition={props.show !== 'admin'}>
          <section className="btnn">

            <button onClick={() => {
              props.addToFav(props.post.onePost._id, props.token);
            }} variant="light">Add To Favorite</button>

            <button variant="light">Chat</button>


            <Comment />

          </section>
        </Show>
      </section> */}
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
  getRemoteProduct: (id) => dispatch(getRemoteProduct(id)),

  addToFav: (id, token) => dispatch(addToFav(id, token)),
  getPost: (id, token) => dispatch(getPost(id, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OneProduct);