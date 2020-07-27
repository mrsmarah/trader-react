import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import products from '../../store/reducers/products';
// import * as action from '../../store/reducers/products.js';
import {getRemoteData} from '../../store/reducers/products';
import {getRemoteProduct } from '../../store/reducers/post';


function Products (props){


  useEffect(() => {
    props.get();
  }, []);

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
  return {data : state.products.products};
} ;

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getRemoteData() ),
  getRemoteProduct: (id) => dispatch(getRemoteProduct(id) ),

});
export default connect(mapStateToProps  , mapDispatchToProps)(Products);