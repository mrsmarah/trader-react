import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../../store/reducers/onePostAdmin';
import cookie from 'react-cookies';

function onePostAdmin(props) {
  let { id } = useParams();
  useEffect(() => {
    props.getPost(id);
  });

  return (
    <section>

      <span>{props.post.onePost.title}</span>
      <p>POSTED BY :{props.post.onePost.username} </p>
      <p>PRICE : {props.post.onePost.price} </p>
      <p>DESCRIPTION :{props.post.onePost.description} </p>
      <p>CATEGORY :{props.post.onePost.categories} </p>
      <section className="btnn">
        <button onClick={} variant="light">Reeject</button>
        <button variant="light">Accept</button>
      </section>

    </section>
  );



}

const mapStateToProps = (state) => {
  return { post: state.post };
};

const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(getPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(onePostAdmin);