/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
// import { handleUpload }  from '../../firebase';
import { handleUpload } from '../../store/reducers/upload';
import { connect } from 'react-redux';
import './upload.css';
import './hover.css';
import Table from 'react-bootstrap/Table';
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
      {/* <div className='gridClass'>
        <div className='gridImages'>
          {
            props.images.map((imageMap, i) => {
              //   console.log('uploaded file--->',props.images);
              return (
                <div className='imges'>
                  <img className='animate__backInLeft' key={imageMap} src={`${imageMap}`} alt={`uploaded image ${i}`} width="150" height="150" />
                </div>
              );
            })
          }
        </div>
      </div> */}
      {/* <img className='backImg' src='https://image.freepik.com/free-photo/living-room-with-armchairs-shelfs-room-wall-blue_41470-216.jpg' ></img> */}
      <Table className='mt-4 tavleImag'>
        <tr className='grid-container'>
          {props.images.map((imageMap, i) => {
            return (
              <td className='imges grid-item'>
                <img key={imageMap} src={`${imageMap}`} alt={`uploaded image ${i}`} width="150" height="150" />
              </td>
            );
          })}
        </tr>
      </Table>




      {/* <progress value={progress} max="100" /> */}

      <div className="fileUpload hvr-bounce-in">
        <input className='upload ' multiple type="file" onChange={handleChange} />
        <span id='uploadSpan'>Upload Images</span>
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