import React , { useEffect,useState }from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/reducers/profile';
import Post from '../post'; 
import {useParams,NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const Main = (props) => {
  // const [username, setCount] = useState();
  let {username} = useParams();
  //   setCount(username1);
  console.log('username profile',username);
 

  useEffect(() => {
    console.log('username profile2',username);
    props.getUser(username ,props.token );
    props.getPosts(username , props.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // console.log('unmounting...');
    // return () => {
    //   console.log('unmounting...');
    //   props.clear();  
    // };
  }, []);
  
  return (
    <>
      <Card style={{ width: '18rem' }}className = {`cards user`} >
        <Card.Img className='imagepro' variant="top" src={props.img||'default'} />
        <Card.Body>
          <Card.Title>{props.user.fullName||props.user.username}</Card.Title>
          <Card.Text>
        Email: <br/>
            {props.user.email}
          </Card.Text>
          <NavLink to="/favList">Fav List</NavLink>
        </Card.Body>
      </Card>
      {props.posts.map(post=>{
          console.log('post data in profile',post);
        return(    
          <Post key={post.id} data={post} />
        );
      })}
 
    </>
  );
  
};

const mapStateToProps = (state) => {
  console.log('state------>',state);
  return { 
    user: state.profile.user,
    posts:  state.profile.posts ,
    username: state.auth.username,
    token : state.auth.token,
  };
};


const mapDispatchToProps = (dispatch, getState) => ({
  getUser: (username , token) => dispatch(actions.getUser(username ,token )),
  getPosts: (username ,token ) => dispatch(actions.getPosts(username , token)),
  clear: ()=>dispatch(actions.clear()),
});

// const mapDispatchToProps = { select };
export default connect(mapStateToProps, mapDispatchToProps)(Main);
