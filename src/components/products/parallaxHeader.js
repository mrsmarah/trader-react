
import React from 'react';
import { Parallax } from 'react-parallax';

const Parallaxx = (props) => {
  
  return (

<Parallax bgImage="https://www.incimages.com/uploaded_files/image/1920x1080/getty_663974538_353364.jpg" strength={500}>
<div style={{ height: 500 }}>
    <div style= {{
background: '#fff',
left: '50%',
top: '50%',
position: 'absolute',
padding: '20px',
transform: 'translate(-50%, -50%)',
}}>
Start Your Shopping Now!</div>
</div>
</Parallax>

  );
};

export default Parallaxx