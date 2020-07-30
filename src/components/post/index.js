// import React from 'react';
// import { MDBIcon , MDBCol ,MDBCard,  MDBCardImage , MDBBtn , MDBRow , MDBCardBody , MDBCardTitle , MDBCardText } from "mdbreact";
// import { connect } from 'react-redux';
// import * as actions from '../../store/reducers/profile';

// const Post = (props) => {
  
//   return (
//     <>
//     <div  id={props.data.id}>
//       <p>{props.data.title}</p>
//       <p>{props.data.description}</p>
      
//     </div>
//     {/* <div className="shadow-box-example hoverable">


//     <MDBCol md="4">
//       <MDBCard cascade>
//         <MDBCardImage
//           cascade
//           className='img-fluid'
//           overlay="white-light"
//           hover
//           src='https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg'
//         />
//         <MDBBtn
//           // href={`/search/${props.data.id}`}
//           floating
//           tag='a'
//           className='ml-auto mr-4 lighten-3 mdb-coalor'
//           // action onClick={()=> props.getRemoteProduct(product._id)}
//         >
//           <MDBIcon icon='chevron-right' className="mdb-color lighten-3"/>
//         </MDBBtn>
//         <MDBCardBody cascade>
//           <MDBCardTitle>{props.data.title}</MDBCardTitle>
//           <hr/>
//           <MDBCardText>
//                   <h5>
//                      DESCRIPTION: <br/>
//                   </h5>
//                       {props.data.description}
//           </MDBCardText>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCol>
//     </div> */}
// </>
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
//   // deletePost: (id,token)=>dispatch(actions.deletePost(id,token)),
// });

// // const mapDispatchToProps = { select };
// export default connect(mapStateToProps, mapDispatchToProps)(Post);

import React from 'react';

 import '../products/product.scss'
 import Card from 'react-bootstrap/Card';
 import './post.scss';
import { connect } from 'react-redux';
import {NavLink } from 'react-router-dom';
import * as actions from '../../store/reducers/profile';
const Post = (props) => {
  
  return (
    // <div  id={props.data.id}>
    //   <p>{props.data.title}</p>
    //   <p>{props.data.description}</p>
      
    // </div>
    <div className="grid">
    <div class="hover">

    <img className='firstPic' variant="top" src="https://via.placeholder.com/300" />
    <img className='secPic' variant="top" src="https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350-300x300.png" />

    </div>
<Card style={{ width: '18rem' }}className = {`cards ${props.data.title}`} >
<Card.Body>
  <Card.Title>
    <h3>
    {props.data.title}
      </h3></Card.Title>

  <Card.Text>
    <h5>
DESCRIPTION: <br/>
</h5>
    {props.data.description}
  </Card.Text>
  <button onClick={()=>props.deletePost(props.data._id,props.token)}>delete</button>
</Card.Body>
</Card>
</div>

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

