import React, { useEffect } from 'react';
import axios from 'axios';
import { statusPost, changeStatus } from '../../store/reducers/adminPageReducer.js';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
const API = process.env.API_URL || 'https://trader401.herokuapp.com';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlhemFuIiwiX2lkIjoiNWVmMzBjODQwODBkMWQwMDE3MTFlMzFjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTk1ODQwMjg4LCJleHAiOjE1OTU5MjY2ODh9.dQffdtH5tOwFg9mZRJ2Hoejp9JBcaRkntdl_OcSmbEY';

const Admin = (props) => {
  useEffect(() => {
    props.post();
  }, [props]);
  return (
    <>
      <h1>Admin Page</h1>
      <Table>
        <tr>
          <th>User Name</th>
          <th>Title</th>
          <th>Categories</th>
          <th>Status</th>
          <th>Descripion</th>
        </tr>
        {props.posts.adminPost.map((post) => {
          return (
            <tr>
              <th>{post.username}</th>
              <th>{post.title}</th>
              <th>{post.categories}</th>
              <th>
                <select id="cars" name="cars">
                  <option defaultChecked value="pendding">{post.status}</option>
                  <option onClick={changeStatus} value="accept">accept</option>
                  <option onClick={changeStatus} value="reject">reject</option>
                </select>
              </th>
              <th>{post.description}</th>
            </tr>
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
});
export default connect(mapStateToProps, mapDispatchToProps)(Admin);

