import React , { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import {getRemoteData,getFav} from '../../store/reducers/products';
import {getRemoteProduct } from '../../store/reducers/post';
import {getFilteredProducts} from '../../store/reducers/products';
import {addToFav } from '../../store/reducers/post';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon , MDBCol ,MDBCard,  MDBCardImage , MDBBtn , MDBRow , MDBCardBody , MDBCardTitle , MDBCardText } from "mdbreact";
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
    <section className="containerDiv">

        {/* {console.log('hello------->', props.data)} */}
        {
          props.data.map((product , i) =>{
            // console.log('hello')
            return (
              <>


<div className="shadow-box-example hoverable">


      <MDBCol md="4">
        <MDBCard cascade>
          <MDBCardImage
            cascade
            className='img-fluid'
            overlay="white-light"
            hover
            src='https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg'
          />
          <MDBBtn
            href={`/search/${product._id}`}
            floating
            tag='a'
            className='ml-auto mr-4 lighten-3 mdb-coalor'
            action onClick={()=> props.getRemoteProduct(product._id)}
          >
            <MDBIcon icon='chevron-right' className="mdb-color lighten-3"/>
          </MDBBtn>
          <MDBCardBody cascade>
            <MDBCardTitle>{product.title}</MDBCardTitle>
            <hr/>
            <MDBCardText>
                    <h5>
                       DESCRIPTION: <br/>
                    </h5>
                        {product.description}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
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