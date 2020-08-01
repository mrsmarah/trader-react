import React , { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import {connect} from 'react-redux';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import {getRemoteData,getFav} from '../../store/reducers/products';
import {getRemoteProduct } from '../../store/reducers/post';
import {getFilteredProducts} from '../../store/reducers/products';
import {addToFav } from '../../store/reducers/post';
import { MDBIcon,MDBCol,MDBCardTitle, MDBBtn,MDBCard,MDBCardBody,MDBCardImage,MDBCardText } from "mdbreact";
import './product.scss'
import ParallaxHeader from './parallaxHeader.js'
import ParallaxFooter from './parallaxFooter.js'

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

    <section className="allProduct">
    {/* <ParallaxHeader/> */}
      <section className="productContainer">
  
        {props.data.map((product , i) =>{
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
            src= {props.data.images||"https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg"}
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
                    <p className="paragraph">
                        {product.description}
                        </p>
            </MDBCardText>
            <MDBIcon
              icon='heart'
              className='cyan-text'
              size='3x'
              style={{ cursor: 'pointer' }}
              onClick={() =>{
                props.addToFav(product._id, props.token );
              }}
      />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </div>
            </>
          );
        })
      }
      </section>
      <MDBCol md="12" className="mb-4">

<MDBCard className="card-image" style={{
        backgroundImage:
          "url(https://www.pngitem.com/pimgs/m/82-821547_watercolour-splash-background-for-header-pastel-watercolor-splash.png)"
      }}>
  <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
    <div className="black">
      <h3 className="py-3 font-weight-bold">
        <strong> What's Special</strong>
      </h3>
      <h6 className="purple-text">
        <strong> For today?</strong>
      </h6>
    </div>
  </div>
</MDBCard>
</MDBCol>
<section className="threeCard">
<MDBCol>
  <MDBCard
    className="card-image imageCard"
    style={{
      backgroundImage:
        "url('https://cdn.vox-cdn.com/thumbor/3SDag4_szhZrsfE86H7OGXcesxs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19395168/vpavic_191118_3800_0122.jpg')"
    }}
  >
    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 divImg">
      <div>
        <h5 className="pink-text">
        <MDBIcon icon="percent" /> SALE
        </h5>
        <MDBCardTitle tag="h3" className="pt-2">
          <strong>DISCOUNT 30%</strong>
        </MDBCardTitle>
      </div>
    </div>
  </MDBCard>
</MDBCol>

<MDBCol>
  <MDBCard
    className="card-image imageCard"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-vector/delivery-service-with-masks-illustration_23-2148501978.jpg?size=338&ext=jpg')"
    }}
  >
    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 divImg">
      <div>
        <h5 className="pink-text">
        <MDBIcon icon="truck" /> Shipping
        </h5>
        <MDBCardTitle tag="h3" className="pt-2">
          <strong>FREE DELIVERY</strong>
        </MDBCardTitle>
      </div>
    </div>
  </MDBCard>
</MDBCol>

<MDBCol>
  <MDBCard
    className="card-image imageCard"
    style={{
      backgroundImage:
        "url('https://vips.org/wp-content/uploads/2017/12/ribbonhand1.jpg')"
    }}
  >
    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 divImg">
      <div>
        <h5 className="pink-text">
        <MDBIcon icon="fire" /> Limited
        </h5>
        <MDBCardTitle tag="h3" className="pt-2">
          <strong>special gifts</strong>
        </MDBCardTitle>
      </div>
    </div>
  </MDBCard>
</MDBCol>

</section>
      <ParallaxFooter/>
    </section>

  );
}

const mapStateToProps = (state) =>{
  console.log('state from categories------>',state);
  return {
    categories: state.categories,
    data : state.products.products,
    // data: state.pagination.currentItems,//pagination
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