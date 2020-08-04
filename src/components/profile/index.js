import React , { useEffect,useState }from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/reducers/profile';
import Post from '../post'; 
import {useParams,NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './profile.scss'
import Parallax from './parallaxAvatar.js';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Profile = (props) => {
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



      {/* <Card style={{ width: '18rem' }}className = {`cards user`} >
        <div className='sideBySide'>
        <Card.Img className='imagepro' variant="top" src={props.img||'https://lh3.googleusercontent.com/proxy/3HxpFmif7VVizd08qluFlpc7nxT8AVDKHfp-h74ZvQh7Q34SAbCtQEcM9zhOx1TSmntCeqkvxyU7VzECHwBUuw'} />
        <Card.Body>
          <Card.Title>{props.user.fullName||props.user.username}</Card.Title>
          <Card.Text>
        Email: <br/>
            {props.user.email}
          </Card.Text>
          <NavLink to="/favList">Fav List</NavLink>
        </Card.Body>
        </div>
      </Card>
      {props.posts.map(post=>{
        console.log('post data in profile',post);
        return(    
          <Post key={post.id} data={post} />
        );
      })} */}
 
      <Parallax/>
      <div className="avatar">
        <img src={props.user.userImage || 'https://axxeltrova.com/wp-content/uploads/2017/11/round-placeholder.png'} alt="img" className="imgAvatar"/>
        <h3>
          {props.user.fullName||props.user.username}
        </h3>
        <div className="headerProfile">
          <section className="posts">
            <h4>
    posts
            </h4>

            <span >
              {props.posts.length}
            </span>

 
          </section>

          <section className="following">
            <h4>
  following
            </h4>
            <span>
  0
            </span>
          </section>

          <section className="followers">
            <h4>
  followers
            </h4>
            <span>
 2
            </span>
          </section>

        </div>

      </div>
      <div className="marginMin">
        {/* <NavLink to="/favList">Fav List</NavLink> */}
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            {props.posts.map(post=>{
              console.log('post data in profile',post);
              return(    
                <Post key={post.id} data={post} />
              );
            })}
          </Carousel>
        </div>

      </div>
    </>
  );
  
};

const mapStateToProps = (state) => {
  console.log('state------>',state);
  return { 
    user: state.profile.user1,
    posts:  state.profile.posts1 ,
    username: state.auth.username,
    token : state.auth.token,
  };
};


const mapDispatchToProps = (dispatch, getState) => ({
  getUser: (username , token) => dispatch(actions.getUser1(username ,token )),
  getPosts: (username ,token ) => dispatch(actions.getPosts1(username , token)),
  clear: ()=>dispatch(actions.clear()),
});

// const mapDispatchToProps = { select };
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
