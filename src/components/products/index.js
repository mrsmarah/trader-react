import React , { useEffect } from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import products from '../../store/reducers/products';
import * as action from '../../store/reducers/products.js';
function Products (props){
    const fetchData = () => {
        props.get();
      };
      useEffect(() => {
        // superagent.get()
        fetchData();
      }, []);
    return (
        <section>
              <button onClick={fetchData}>Get Products</button>
            <ul className='pro'>
                {/* {console.log('hello------->', props.data)} */}
                {
                    
                    props.data.map(product =>{
                        // console.log('hello')
                        return (
        <Card style={{ width: '18rem' }}className = {`cards ${product.title}`} key = {product.title}>
            <Card.Img className='imagepro' variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                POSTED BY: <br/>
                {product.username}
                </Card.Text>
                <Card.Text>
                description: <br/>
                {product.description}
                </Card.Text>
                <section className="btnn">
                {/* <Button onClick={()=> props.addtoCart(product.title)} variant="light">ADD TO CART</Button> */}
                <Button variant="light" onClick={fetchData} key={product._id}>view details</Button> |
                <Button variant="light">Add To Favorite</Button> |
                <Button variant="light">Chat</Button>

                </section>
              </Card.Body>
         </Card>
                        )
                    })
                }
            </ul>
        </section>
    )
}
const mapStateToProps = (state) =>{
    return {data : state.Products.products}
} 

  const mapDispatchToProps = (dispatch) => ({
    get: () => dispatch(action.getRemoteData() , action.getRemoteProduct()),
  });
export default connect(mapStateToProps  , mapDispatchToProps)(Products);