import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import products from '../../store/reducers/products';
// import * as action from '../../store/reducers/products.js';
import {getRemoteData} from '../../store/reducers/products';
import {getRemoteProduct } from '../../store/reducers/post';
import './product.scss'


function Products (props){


  useEffect(() => {
    props.get();
  }, []);

  return (
    <section>
        {/* {console.log('hello------->', props.data)} */}
        {
          props.data.map((product , i) =>{
            // console.log('hello')
            return (
              <Card style={{ width: '18rem' }}className = {`cards ${product.title}`} key = {i}>
                <div class="hover">
                <Card.Img className='firstPic' variant="top" src="https://via.placeholder.com/300" />
                <Card.Img className='secPic' variant="top" src="https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350-300x300.png" />
                </div>
                <Card.Body>
                  <Card.Title>
                    <h3>
                    {product.title}
                      </h3></Card.Title>
                  <Card.Text>
                  <h5>
            POSTED BY: <br/>
            </h5>
                    {product.username}
                  </Card.Text>
                  <Card.Text>
                    <h5>
            DESCRIPTION: <br/>
            </h5>
                    {product.description}
                  </Card.Text>

                  <section className="btnn">
                    <Button onClick={()=> props.getRemoteProduct(product._id)} variant="light" className="hoverBtn" >
                      <Link to={`/search/${product._id}`} >ONE PRODUCT</Link>
                    </Button>
                    <Button variant="light" className="hoverBtn" >Add To Favorite</Button> 
                  </section>

                </Card.Body>
              </Card>
            );
          })
        }
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