import firebase from 'firebase/app';
import 'firebase/storage';




let initialState = {
  images: [],
  progress: 0,
};
  
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'ADD IMAGES':
    return { ...state, images:[...state.images,payload] };
  case 'PROGRESS':
    return { ...state, ...payload };
  default:
    return state;
  }
};



const firebaseConfig = {
  apiKey: 'AIzaSyBP-GR2F2esV8Y-0yT21WgjrtuRLucBvlA',
  authDomain: 'trader401.firebaseapp.com',
  databaseURL: 'https://trader401.firebaseio.com',
  projectId: 'trader401',
  storageBucket: 'trader401.appspot.com',
  messagingSenderId: '314168147728',
  appId: '1:314168147728:web:9b1cd1149b6edc1c8f2f95',
  measurementId: 'G-8KQY4H9PEK',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export const uploadImages = (images) => ({
  type: 'ADD IMAGES',
  payload:  images ,
});

export const setProgress = (progress) => ({
  type: 'PROGRESS',
  payload: { progress },
});

export const handleUpload = function (spaceName, files) {
  return  (dispatch) => {
    let images = [];
    for (let i = 0; i < files.length; i++) {
      const uploadTask = storage
        .ref(`${spaceName}/${files[i].name}`)
        .put(files[i]);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100 );
          console.log(progress);
          dispatch(setProgress(progress));
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref(spaceName)
            .child(files[i].name)
            .getDownloadURL()
            .then(async (url) => {
              await images.push(url);
              dispatch(uploadImages(url));
              dispatch(setProgress(0));
            });
        });
      
    }
    
    
  };
};