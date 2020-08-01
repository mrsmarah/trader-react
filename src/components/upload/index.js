import React, { useState,useEffect } from 'react';
// import { handleUpload }  from '../../firebase';
import { handleUpload } from '../../store/reducers/upload';
import { connect } from 'react-redux';

const ReactFirebaseFileUpload = (props) => {
  const [images, setImage] = useState([]);
  const [progress, setProgress] = useState(0);
  const [imagesLink,setImagesLink] = useState([]);
  const handleChange = async (e) => {
    if (e.target.files.length > 0) {
      await setImage(e.target.files);
    }
    
  };
  useEffect(()=>{
    setImagesLink(props.images);
    
     
  },[props.images.length]);
  useEffect(()=>{
    handleUpload();
  },[images]);
  const handleUpload = () => {
    props.handleUpload('users', images);
  };

  return (
    <div>

      {
        props.images.map((imageMap , i) =>{
        //   console.log('uploaded file--->',props.images);
          return (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
            
            <img key={imageMap}  src = {`${imageMap}`} alt={`uploaded image ${i}`}  width="300" height="300"/>
            
          );
        })
      }
      <progress value={progress} max="100" />
      <input multiple type="file" onChange={handleChange} />
      {/* <button onClick={handleUpload}>Upload</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user,
    images:state.upload.images, 
    progress:state.upload.progress, 
  };
};
const actionCreator = (dispatch) => ({
  handleUpload:  (spaceName, images) =>
    dispatch(handleUpload(spaceName, images)),
});
export default connect(mapStateToProps, actionCreator)(ReactFirebaseFileUpload);