import React, { useState, useEffect } from 'react';
// import { handleUpload }  from '../../firebase';
import { handleUpload } from '../../store/reducers/upload';
import { connect } from 'react-redux';
import './addPost.css';
const ReactFirebaseFileUpload = (props) => {
  const [images, setImage] = useState([]);
  const [progress, setProgress] = useState(0);
  const [imagesLink, setImagesLink] = useState([]);
  const handleChange = async (e) => {
    if (e.target.files.length > 0) {
      await setImage(e.target.files);
    }

  };
  useEffect(() => {
    setImagesLink(props.images);


  }, [props.images.length]);
  useEffect(() => {
    handleUpload();
  }, [images]);
  const handleUpload = () => {
    props.handleUpload('users', images);
  };

  return (
    <div>
      <div className='gridClass'>
        <div className='gridImages'>
          {
            props.images.map((imageMap, i) => {
              //   console.log('uploaded file--->',props.images);
              return (
                <div className='imges'>
                  <img key={imageMap} src={`${imageMap}`} alt={`uploaded image ${i}`} width="100" height="100" />

                </div>

              );
            })
          }
        </div>

      </div>


      <progress value={progress} max="100" />

      <div class="fileUpload">
        <input className='upload' multiple type="file" onChange={handleChange} />
        <span>Upload Images</span>
      </div>

      {/* <button onClick={handleUpload}>Upload</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    images: state.upload.images,
    progress: state.upload.progress,
  };
};
const actionCreator = (dispatch) => ({
  handleUpload: (spaceName, images) =>
    dispatch(handleUpload(spaceName, images)),
});
export default connect(mapStateToProps, actionCreator)(ReactFirebaseFileUpload);