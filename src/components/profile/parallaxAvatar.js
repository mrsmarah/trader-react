
import React from 'react';
import { Parallax } from 'react-parallax';
import { connect } from 'react-redux';
const Parallaxx = (props) => {
  
  return (

<Parallax bgImage="https://stdevelopers.info/wp-content/uploads/2018/04/gearship-portfolio-1.jpg" strength={300}>
<div style={{ height: 350 }}>

</div>
</Parallax>

  );
};

const mapStateToProps = (state) => {
    console.log('state------>',state);
    return { 
      user: state.profile.user,
      posts:  state.profile.posts ,
      username: state.auth.username,
      token : state.auth.token,
    };
  };

  
  export default connect(mapStateToProps )(Parallaxx);