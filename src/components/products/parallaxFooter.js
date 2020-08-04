
import React from 'react';
import { Parallax } from 'react-parallax';

const Parallaxx = (props) => {
  
  return (

<Parallax bgImage="https://www.telegraph.co.uk/content/dam/telegraph-connect/small-business/man-colourful-shopping-bags.jpg" strength={500}>
<div style={{ height: 500 }}>
  
  <div className="threeDivFooter">
  
    <div className="firstSection"
    style= {{
        // background: '#fff',
        // left: '50%',
        // top: '50%',
        // position: 'absolute',
        padding: '20px',
        color:'#fff'
        // transform: 'translate(-50%, -50%)',
        }}>
            <h3>
               Do You Have Staff To sell?
            </h3>
         <p>
         Here in our website you can DO this, You only need to add a new POST with your product
         </p>
    </div>

<div className="secSection"
    style= {{
        // background: '#fff',
        // left: '50%',
        // top: '50%',
        // position: 'absolute',
        padding: '20px',
        color:'#fff'
        // transform: 'translate(-50%, -50%)',
        }}>
        <h3>
               Do You Have Staff To sell?
            </h3>
         <p>
         Here in our website you can DO this, You only need to add a new POST with your product
         </p>
         </div>

<div className="thirdSection"
    style= {{
        // background: '#fff',
        // left: '50%',
        // top: '50%',
        // position: 'absolute',
        padding: '20px',
        color:'#fff'
        // transform: 'translate(-50%, -50%)',
        }}>
        <h3>
               Do You Have Staff To sell?
            </h3>
         <p>
         Here in our website you can DO this, You only need to add a new POST with your product
         </p>
         </div>
</div>
</div>
</Parallax>

  );
};

export default Parallaxx