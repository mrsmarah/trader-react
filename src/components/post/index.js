import React from 'react';
 import '../products/product.scss'
 import Card from 'react-bootstrap/Card';
 import './post.scss'
const Post = (props) => {
  
  return (
    // <div  id={props.data.id}>
    //   <p>{props.data.title}</p>
    //   <p>{props.data.description}</p>
      
    // </div>
    <div className="grid">
    <div class="hover">

    <img className='firstPic' variant="top" src="https://via.placeholder.com/300" />
    <img className='secPic' variant="top" src="https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350-300x300.png" />
    </div>
<Card style={{ width: '18rem' }}className = {`cards ${props.data.title}`} >
<Card.Body>
  <Card.Title>
    <h3>
    {props.data.title}
      </h3></Card.Title>

  <Card.Text>
    <h5>
DESCRIPTION: <br/>
</h5>
    {props.data.description}
  </Card.Text>
</Card.Body>
</Card>
</div>

  );
};


export default Post;
