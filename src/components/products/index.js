import React , { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cookie from 'react-cookies';
import {getRemoteData,getFav} from '../../store/reducers/products';
import {getRemoteProduct } from '../../store/reducers/post';
import {getFilteredProducts} from '../../store/reducers/products';


function Products (props){
  console.log('products props ------>',props);
  let{category} = useParams();

  useEffect(() => {
    
    console.log('PRODUCTS KEY ------>',props.productsKey);
    
    setTimeout(function(){while(props.user === {}){}
      return true;}  , 2000);

    switch (props.productsKey) {

    case 'fav':
      console.log('favlist------>',props.user);
      props.getFav( props.user.username,cookie.load('auth'));
      break;

    case 'FILTER':
      console.log('FILTER from switch ', category);
      props.getFilteredProducts(category);
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
  console.log('state from categories------>',state);
  return {
    categories: state.categories,
    data : state.products.products,
    user :  state.auth.user ,
  };
} ;

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getRemoteData() ),
  getRemoteProduct: (id) => dispatch(getRemoteProduct(id) ),
  getFav:(username,token) => dispatch(getFav(username,token)),
  getFilteredProducts: (category) => dispatch(getFilteredProducts(category) ),
});
export default connect(mapStateToProps  , mapDispatchToProps)(Products);