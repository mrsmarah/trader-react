import React , { useEffect } from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import products from '../../store/reducers/products';
import { getRemoteData} from '../../store/reducers/products.js';
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
                {
                    props.data.products.map(product =>{
                        console.log('hello')
                        return (
        <Card style={{ width: '18rem' }}className = {`cards ${product.title}`} key = {product.title}>
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
                {/* <Button onClick={()=> props.addtoCart(product.title)} variant="light">ADD TO CART</Button> */}
                <Button variant="light">Comment</Button> |
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
    return {data : state.data}
} 

  const mapDispatchToProps = (dispatch) => ({
    get: () => dispatch(getRemoteData()),
  });
export default connect(mapStateToProps  , mapDispatchToProps)(Products);