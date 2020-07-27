import React from 'react';
 

const Post = (props) => {
  
  return (
    <div  id={props.data.id}>
      <p>{props.data.title}</p>
      <p>{props.data.description}</p>
      
    </div>
  );
};

export default Post;
