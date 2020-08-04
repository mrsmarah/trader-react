
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
               Do You Have items or services to sell?
            </h3>
            <p>
         This is the perfect place to do that , go ahead and trade your stuff with other users
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
               Do You look for anything to buy ?
            </h3>
            <p>
         Also this website will be your best friend , you can find a lot of products as well as services , jobs and others.
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
               Feel free to contact us and submit your feed back...
            </h3>
            <p>
         It's our pleasure to hear from you :)
            </p>
          </div>
        </div>
      </div>
    </Parallax>

  );
};

export default Parallaxx;