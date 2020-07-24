import React from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import products from '../../store/reducers/products';

function Products (props){
    return (
        <section>
            <ul className='pro'>
                {
                    props.products.products.map(product =>{
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
    return {products : state.Products}
} 
const mapDispatchToProps = { addtoCart } 
export default connect(mapStateToProps , mapDispatchToProps  )(Products);