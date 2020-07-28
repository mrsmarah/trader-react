import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cookie from 'react-cookies';
// import products from '../../store/reducers/products';
// import * as action from '../../store/reducers/products.js';
import {getRemoteData,getFav} from '../../store/reducers/products';
import {getRemoteProduct } from '../../store/reducers/post';


function Products (props){
  // console.log('favlist ------>',props.products);

  useEffect(() => {
    console.log('favlist ------>',props.productsKey);
    setTimeout(function(){while(props.user === {}){}
      return true;}  , 2000);
    switch (props.productsKey) {
    case 'fav':
      console.log('favlist 222222------>',props.user);
      props.getFav( props.user.username,cookie.load('auth'));
      break;
    
    default:
      props.get();
      break;
    }
    
  },[]);

  return (
    <section>
      <ul className='pro'>
        {/* {console.log('hello------->', props.data)} */}
        {
          props.data.map((product , i) =>{
            // console.log('hello')
            return (
              <Card style={{ width: '18rem' }}className = {`cards ${product.title}`} key = {i}>
                <Card.Img className='imagepro' variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
            POSTED BY: <br/>
                    {product.price}$ 
                  </Card.Text>
                  <Card.Text>
            description: <br/>
                    {product.description}
                  </Card.Text>

                  <section className="btnn">
                    <Button onClick={()=> props.getRemoteProduct(product._id)} variant="light">
                      <Link to={`/search/${product._id}`} >ONE PRODUCT</Link>
                    </Button>
                    <Button variant="light">Add To Favorite</Button> 
                  </section>

                </Card.Body>
              </Card>
            );
          })
        }
      </ul>
    </section>
  );
}

const mapStateToProps = (state) =>{
  return {
    data : state.products.products,
    user :  state.auth.user ,
  };
} ;

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getRemoteData() ),
  getRemoteProduct: (id) => dispatch(getRemoteProduct(id) ),
  getFav:(username,token) => dispatch(getFav(username,token)),
});
export default connect(mapStateToProps  , mapDispatchToProps)(Products);