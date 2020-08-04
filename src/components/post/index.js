import React from 'react';
import { MDBIcon , MDBCol ,MDBCard,  MDBCardImage , MDBBtn , MDBRow , MDBCardBody , MDBCardTitle , MDBCardText } from "mdbreact";
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

import * as actions from '../../store/reducers/profile';
import './post.scss'
const Post = (props) => {
  
  return (
    <>
      {/* <div  id={props.data.id}>
      <p>{props.data.title}</p>
      <p>{props.data.description}</p>
      
    </div> */}
      <div className ="cardzz card--1">
        <div className ="card__info-hover">
          <svg className ="card__like"  viewBox="0 0 24 24" style={{
            pointerEvents: 'bounding-box'
          }} onClick={() =>{
            props.addToFav(props.data._id, props.token );
            alert('Post added to your favorite list !');
          }}>
            <path 
              d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 
    4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,
    6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 
    9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36
     22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />

          </svg>
        </div>
        <div className ="card__img"
          style={{
            backgroundImage: `url(${props.data.images[0]})`,
          }}
        ></div>
        <Link to={`/search/${props.data._id}`} className="card_link">
          <div className="card__img--hover"style={{
            backgroundImage:  `url(${props.data.images[0]})`,
          }}></div>
        </Link>
        <div className ="card__info">
  
          <h3 className="card__title">{props.data.title}</h3>
          <span className="card__category"> {props.data.description}</span>
          <span className="card__by">by <Link to={`/user/${props.data.username}`}
            className="card__author" >{props.data.username}
          </Link> </span>
          <div className="likeDislike">
                 
            <MDBIcon
              icon='trash'
              className='cyan-text'
              size='3x'
              style={{ cursor: 'pointer' }}
              onClick={()=>props.deletePost(props.data._id,props.token)}
            />
          </div>
        </div>
      </div>
      {/* <div className="shadow-box-example hoverable">
<MDBCol md="4">
  <MDBCard cascade>
    <MDBCardImage
      cascade
      className='img-fluid'
      overlay="white-light"
      hover
      src= "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg"
    />
    <MDBCardBody cascade>
    <MDBCardText className="buttonInText">
    <MDBBtn
      href={`/search/${props.data._id}`}
      floating
      tag='a'
      className='ml-auto mr-4 lighten-3 mdb-coalor next'
      action onClick={()=> props.getRemoteProduct(props.data._id)}
    >
      <MDBIcon icon='chevron-right' className="mdb-color lighten-3"/>
    </MDBBtn>
    </MDBCardText>
      <MDBCardTitle>{props.data.title}</MDBCardTitle>
      <hr/>
      <MDBCardText>

              <p className="paragraph">
                  {props.data.description}
                  </p>
      </MDBCardText>
      <MDBIcon
        icon='trash'
        className='cyan-text'
        size='3x'
        style={{ cursor: 'pointer' }}
        onClick={()=>props.deletePost(props.data._id,props.token)}
/>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
</div> */}
    </>
  );
};
const mapStateToProps = (state) => {
  console.log('state------>',state);
  return { 
    user: state.profile.user,
    posts:  state.profile.posts ,
    username: state.auth.username,
    token: state.auth.token,
  };
};


const mapDispatchToProps = (dispatch, getState) => ({
  getUser: (username) => dispatch(actions.getUser(username)),
  getPosts: (username) => dispatch(actions.getPosts(username)),
  deletePost: (id,token)=>dispatch(actions.deletePost(id,token)),
});

// const mapDispatchToProps = { select };
export default connect(mapStateToProps, mapDispatchToProps)(Post);

// import React from 'react';

//  import '../products/product.scss'
//  import Card from 'react-bootstrap/Card';
//  import './post.scss';
// import { connect } from 'react-redux';
// import {NavLink } from 'react-router-dom';
// import * as actions from '../../store/reducers/profile';
// const Post = (props) => {
  
//   return (
//     // <div  id={props.data.id}>
//     //   <p>{props.data.title}</p>
//     //   <p>{props.data.description}</p>
      
//     // </div>
//     <div className="grid">
//     <div class="hover">

//     <img className='firstPic' variant="top" src="https://via.placeholder.com/300" />
//     <img className='secPic' variant="top" src="https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350-300x300.png" />

//     </div>
// <Card style={{ width: '18rem' }}className = {`cards ${props.data.title}`} >
// <Card.Body>
//   <Card.Title>
//     <h3>
//     {props.data.title}
//       </h3></Card.Title>

//   <Card.Text>
//     <h5>
// DESCRIPTION: <br/>
// </h5>
//     {props.data.description}
//   </Card.Text>
//   <button onClick={()=>props.deletePost(props.data._id,props.token)}>delete</button>
// </Card.Body>
// </Card>
// </div>

//   );
// };


// const mapStateToProps = (state) => {
//   console.log('state------>',state);
//   return { 
//     user: state.profile.user,
//     posts:  state.profile.posts ,
//     username: state.auth.username,
//     token: state.auth.token,
//   };
// };


// const mapDispatchToProps = (dispatch, getState) => ({
//   getUser: (username) => dispatch(actions.getUser(username)),
//   getPosts: (username) => dispatch(actions.getPosts(username)),
//   deletePost: (id,token)=>dispatch(actions.deletePost(id,token)),
// });

// // const mapDispatchToProps = { select };
// export default connect(mapStateToProps, mapDispatchToProps)(Post);

