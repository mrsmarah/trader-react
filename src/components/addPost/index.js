import React,{useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams,Link,Redirect} from 'react-router-dom';
import Show from '../show';
import * as actions from '../../store/reducers/products';
import {getRemoteProduct } from '../../store/reducers/post';
// import {storage} from '../firebase/firebase';
import Upload from '../upload';

const AddPost = (props) =>{
  let{id} = useParams();
  // let redirectToReferrer = false ;
  const [redirect ,setRedirect] = useState(false);
  const[post, setPost]=useState({});

  //   const allInputs = {imgUrl: ''};
  //   const [imageAsFile, setImageAsFile] = useState('');
  //   const [imageAsUrl, setImageAsUrl] = useState(allInputs);


  //   console.log('imageAsFile---->',imageAsFile);



  //   const handleImageAsFile = async (e) => {
  //     const image = e.target.files[0];
  //     await setImageAsFile(imageFile => (image));
  //     console.log('imageAsFile222---->',imageAsFile);
  //     console.log('imageAsFile333---->',image);
  //     await handleFireBaseUpload(e);

  //   };
  //   if(props.mode==='edit'){
  //     let currentPost = props.posts.filter(post=>post._id === id) ;
  //     setPost(currentPost);
  //   }
  //   console.log('hi from add post post , id------>',post,id,props);
 
  //   const handleFireBaseUpload = (e) => {
  //     e.preventDefault();
  //     console.log('start of upload');
  //     // async magic goes here...
  //     if(imageAsFile === '') {
  //       console.error(`not an image, the image file is a ${typeof(imageAsFile)}`);
  //     }
  //     const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
  //     //initiates the firebase side uploading 
  //     uploadTask.on('state_changed', 
  //       (snapShot) => {
  //         //takes a snap shot of the process as it is happening
  //         console.log(snapShot);
  //       }, (err) => {
  //         //catches the errors
  //         console.log(err);
  //       }, () => {
  //         // gets the functions from storage refences the image storage in firebase by the children
  //         // gets the download url then sets the image from firebase as the value for the imgUrl key:
  //         storage.ref('images').child(imageAsFile.name).getDownloadURL()
  //           .then(fireBaseUrl => {
  //             setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}));
            
  //           });
  //           console.log('ImageAsUrl--->',imageAsUrl);
  //       });
  //   };





  useEffect(() => {
   
    if(props.mode==='edit'){
      let currentPost = props.posts.filter(post=>post._id === id) ;
      setPost(currentPost[0]||{});
    }
  },[]);
  useEffect(() => {
 
    setPost({...post,images:props.images});
  },[props.images]);
  
  const handleChange = e => {
    setPost({...post,[e.target.name]:e.target.value});
    //   state[e.target.name]=e.target.value ;
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    setRedirect(true) ;
    alert('New Post added !');
    console.log('submit post ', props.user.username,props.token,post);
    // const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
    if(props.mode!=='edit'){
      console.log('adding ....');
      await props.addPost( props.user.username,props.token,post);
    }else{
      console.log('updating ....');
      props.updatePost( id,props.token,post);   
    }
    
   
  };
  
  //   "images": [],
  //   "status": "pending",
  //   "deleted": false,
  //   "positiveRateUser": [],
  //   "negativeRateUser": [],
  //   "_id": "5ef312b8080d1d001711e320",
  //   "title": "honda civic ",
  //   "description": "2000 in good condition 1.5L ABS ",
  //   "categories": "car",
  //   "username": "ahmad",
  //   "comment": [],
  //   "__v": 0
  return (
    <>
      {(redirect === true) ? <Redirect to={`/user/${props.username}`}/> : null }
      {console.log(' props.username',props.username)}
      {console.log('add post before render -----> ',post)}
      <Show condition={props.loggedIn}>
        <form onSubmit={handleSubmit} >
          <input
            placeholder="title"
            name="title"
            onChange={handleChange}
            value = {post.title||''}
          />
          <input
            placeholder="description"
            name="description"
            onChange={handleChange}
            value = {post.description}
          />
  
          {/* <input
            placeholder="images"
            name="images"
            multiple
            type="file"
            onChange={handleImageAsFile} 
            value = {post.images}
          /> */}
          <Upload />
          <select class="custom-select" id="inputGroupSelect01" name="categories" onChange={handleChange} 
            value = {post.categories}>
            <option selected>categories</option>
            { props.categories.categories.map(category => {
              return (
                <option value={category.categories}>{category.categories}</option>
              );
            })}
           
          </select>
      
          <Show condition={props.mode!=='edit'}>
            <button >ADD</button>
            {/* <Link to={`/user/${post._id}`}>ADD</Link> */}
          </Show>
          <Show condition={props.mode==='edit'}>
            <button >update</button>
          </Show>
          
        </form>

        
      </Show>
    </>
  );
    
  
};
  
const mapStateToProps = (state) => {
  console.log('state------>',state);
  return { 
    loggedIn: state.auth.loggedIn,
    user:  state.auth.user ,
    categories: state.categories,
    token: state.auth.token,
    posts:  state.profile.posts ,
    images: state.upload.images,
    username: state.auth.user.username,
  };
};
    
    
const mapDispatchToProps = (dispatch, getState) => ({
  addPost: (username,token ,post) => dispatch(actions.addPost(username,token ,post)),
  getRemoteProduct: (id,token) => dispatch(getRemoteProduct(id,token) ),
  updatePost: (id,token ,post) => dispatch(actions.updatePost(id,token ,post)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);