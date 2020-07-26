import React , { useEffect } from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import products from '../../store/reducers/products';
import * as action from '../../store/reducers/products.js';
function Products (props){
      useEffect(() => {
        props.get();
      }, []);
    return (
        <section>
            <ul className='pro'>
                {
                  
                  props.data.map((product , i )=>{
                    // {console.log('hello------->', product)}
                        // console.log('hello')
                        return (
        <Card style={{ width: '18rem' }}className = {`cards ${product.title}`} key = {i}>
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
                <Button variant="light" onClick={props.getOneProduct(product._id)} >view details</Button> |
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
    return {data : state.products.products}
} 

  const mapDispatchToProps = (dispatch) => ({
    get: () => dispatch(action.getRemoteData()),
    getOneProduct: (id) =>dispatch(action.getRemoteProduct(id)),
  });
export default connect(mapStateToProps  , mapDispatchToProps)(Products);