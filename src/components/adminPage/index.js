import React, { useEffect } from 'react';
import { statusPost, changeStatus } from '../../store/reducers/adminPageReducer.js';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { select } from 'react-cookies';

const Admin = (props) => {
  useEffect(() => {
    props.post();
  }, []);

  console.log('props.post.adminPost', props.posts.adminPost);
  return (
    <>

      <h1>Admin Page</h1>
      <Table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Title</th>
            <th>Categories</th>
            <th>Status</th>
            <th>Descripion</th>
          </tr>
        </thead>

        {props.posts.adminPost.map((post) => {

          return (
            <tbody key={post._id}>
              <tr>
                <th>{post.username}</th>
                <th>{post.title}</th>
                <th>{post.categories}</th>
                <th>
                  <select id="cars" onChange={(e) => { props.changeStatus(post._id, { status: e.target.value }); }} value={post.selectValue} name="cars">
                    <option value="pendding">{post.status}</option>
                    <option value="accepted">accept</option>
                    <option value="rejected">reject</option>
                  </select>
                </th>
                <th>{post.description}</th>
              </tr>
            </tbody>

          );
        })}
      </Table>
    </>
  );
};



const mapStateToProps = (state) => {
  return {
    posts: state.admin,
  };
};


const mapDispatchToProps = (dispatch, getState) => ({
  post: () => dispatch(statusPost()),
  changeStatus: (id, newPost) => dispatch(changeStatus(id, newPost)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Admin);

