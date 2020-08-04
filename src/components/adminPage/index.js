import React, { useEffect } from 'react';
import { statusPost, changeStatus } from '../../store/reducers/adminPageReducer.js';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import './admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const Admin = (props) => {

  let adminArray = props.posts.adminPost.sort((a, b) => {
    if(a.username < b.username) { return -1; }
    if(a.username > b.username) { return 1; }
    return 0;
  });

  useEffect(() => {
    props.post(props.token);
    window.scrollTo(0, 0);
  }, []);

  

  
  return (
    <>

      <h1>Admin Page</h1>
      <Table className='adminTable'>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Title</th>
            <th>Categories</th>
            <th>Status</th>
            <th>Description</th>
            <th>Details</th>
          </tr>
        </thead>

        {adminArray.map((post) => {

          return (
            <tbody key={post._id}>
              <tr>
                <th>{post.username}</th>
                <th>{post.title}</th>
                <th>{post.categories}</th>
                {/* <th>View Detalis</th> */}
                <th>
                  <select id="cars" onChange={(e) => { props.changeStatus(post._id, { status: e.target.value }, props.token); }} value={post.selectValue} name="cars">
                    <option value="pendding">{post.status}</option>
                    <option value="accepted">accept</option>
                    <option value="rejected">reject</option>
                  </select>
                </th>
                <th className='charNum'>{post.description}</th>
                <th><Link to={`/status/${post._id}`}>View Details</Link></th>

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
    token: state.auth.token,
  };
};


const mapDispatchToProps = (dispatch, getState) => ({
  post: (token) => dispatch(statusPost(token)),
  changeStatus: (id, newPost, token) => dispatch(changeStatus(id, newPost, token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Admin);

