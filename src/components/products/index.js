import React , { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {getRemoteData,getFav} from '../../store/reducers/products';
import {getRemoteProduct } from '../../store/reducers/post';
import {getFilteredProducts} from '../../store/reducers/products';
import {addToFav } from '../../store/reducers/post';
import { MDBIcon } from "mdbreact";
import './product.scss'


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
      props.getFav( props.user.username, props.token );
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
        {/* {console.log('hello------->', props.data)} */}
        {
          props.data.map((product , i) =>{
            // console.log('hello')
            return (
              <>
                <div className="grid">
                <div class="hover">
                <MDBIcon icon="heart" size="3x" className="indigo-text pr-3" onClick={ () =>{
                      props.addToFav(product._id, props.token );
                    }} />
                <img className='firstPic' variant="top" src="https://via.placeholder.com/300" />
                <img className='secPic' variant="top" src="https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350-300x300.png" />
                </div>
              <Card style={{ width: '18rem' }}className = {`cards ${product.title}`} key = {i}>
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
                       {/* <Button variant="light" className="hoverBtn" >Add To Favorite</Button>  */}
                       
                     </section>
                </Card.Body>
              </Card>
                </div>
                     </>
            );
          })
        }
    </section>
  );
}

const mapStateToProps = (state) =>{
  console.log('state from categories------>',state);
  return {
    categories: state.categories,
    data : state.products.products,
    user :  state.auth.user ,
    token : state.auth.token ,
  };
} ;

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getRemoteData() ),
  getRemoteProduct: (id) => dispatch(getRemoteProduct(id) ),
  getFav:(username,token) => dispatch(getFav(username,token)),
  getFilteredProducts: (category) => dispatch(getFilteredProducts(category) ),
  addToFav: (id ,token ) => dispatch(addToFav(id ,token)),

});
export default connect(mapStateToProps  , mapDispatchToProps)(Products);