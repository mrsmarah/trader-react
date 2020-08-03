import React , { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import {connect} from 'react-redux';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import {getRemoteData,getFav} from '../../store/reducers/products';
import {getRemoteProduct } from '../../store/reducers/post';
import {getFilteredProducts} from '../../store/reducers/products';
import {addToFav,ratePost } from '../../store/reducers/post';
import { MDBIcon,MDBCol,MDBCardTitle, MDBBtn,MDBCard,MDBCardBody,MDBCardImage,MDBCardText } from 'mdbreact';
import './product.scss';
import ParallaxHeader from './parallaxHeader.js';
import ParallaxFooter from './parallaxFooter.js';
import Pagination from '../pagination/pagination';
import {Redirect} from 'react-router-dom';
function Products (props){
  console.log('products props ------>',props);
  let{category} = useParams();

  ////////////////////////////////// PAGINATION
  let currentItems = [];
  let pageNumbers = [];
  let itemPerPage= 12;

  if (props.currentPage) {
    let idxOfLastItem = props.currentPage * itemPerPage;
    let idxOfFirstItem = idxOfLastItem - itemPerPage;
    
    currentItems = props.data.slice(idxOfFirstItem, idxOfLastItem);    
    for (let i = 1; i <= Math.ceil(props.data.length / itemPerPage); i++) {
      pageNumbers.push(i);
    }
  }
  if (!currentItems.length) {
    console.log('empty');
    currentItems= props.data;
  };
  ///////////////////////////////////////

  useEffect(() => {
    
    console.log('PRODUCTS KEY ------>',props.productsKey);
   
    setTimeout(function(){while(props.user === {}){}
      return true;}  , 2000);

    switch (props.productsKey) {

    case 'fav':
      console.log('favlist------>',props.user);
      props.getFav( props.token );
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
<>
    {/* // <section className="allProduct"> */}
      {/* <ParallaxHeader/> */}
      <section className="productContainer">
        {/* {props.data.map((product , i) =>{ */}
        {currentItems.map((product , i) =>{
          return (
            <>
              {/* <Show condition={props.loggedIn} >
                {(redirect === true) ? <Redirect to='/' /> : null }
              </Show> */}
              <div className="shadow-box-example hoverable" >

                
                <MDBCol md="4">
                  <MDBCard cascade>
                    <MDBIcon
                      icon='heart'
                      className='cyan-text'
                      size='3x'
                      style={{ cursor: 'pointer' }}
                      onClick={() =>{
                        props.addToFav(product._id, props.token );
                      }}
                    />
                    <MDBCardImage
                      cascade
                      className='img-fluid'
                      overlay="white-light"
                      hover
                      src= {product.images[0] ? product.images[0] :'https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg'}
                      
                    />
                    <img className="userImgInCard"
                      src={!product.userImage?'https://images.vexels.com/media/users/3/136558/isolated/lists/43cc80b4c098e43a988c535eaba42c53-person-user-icon.png':product.username}
                      alt=''
                    /> <span><Link to={`/user/${product.username}`}
                    >{product.username}
                    </Link></span>
                      
                    <MDBCardBody cascade>
                      <Link to={`/search/${product._id}`}>   
                        <div className="btn-title">
                        
                          <MDBCardTitle>{product.title}</MDBCardTitle>
                        
                          {/* <MDBBtn
                            href={`/search/${product._id}`}
                            floating
                            tag='a'
                            className='ml-auto mr-4 lighten-3 mdb-coalor'
                            action onClick={()=>{}} 
                          >

                            <MDBIcon icon='chevron-right' className="mdb-color lighten-3"/>
                          </MDBBtn> */}
                        
                        </div>
                  
                        <hr/>
                        <MDBCardText>
                          <p className="paragraph">
                            {product.description}
                          </p>

                        </MDBCardText>
                      </Link>
                      <MDBCardText>
                        <div className="likeDislike">
                          <div>
                          <MDBIcon 
                            icon="thumbs-up"
                            onClick={() =>{
                              props.ratePost(product._id, props.token , {'theRate':'+'} );
                            }} />
                          <p>{product.positiveRateUser.length}</p>
                          </div>
                          <div>
                          <MDBIcon 
                            icon="thumbs-down"
                            onClick={() =>{
                              props.ratePost(product._id, props.token , {'theRate':'-'});
                            }} />
                          <p>{product.negativeRateUser.length}</p>
                          </div>
                        </div>
                      </MDBCardText>

                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                
              </div>

            </>
          );
        })
        }
      {/* </section> */}
      </section>
      <Pagination pageNumbers={pageNumbers}/>

      {/* <MDBCol md="12" className="mb-4"> */}

{/* <MDBCard className="card-image" style={{
        backgroundImage:
          "url(https://cdn11.bigcommerce.com/s-fcn1lgnyqp/stencil/535737d0-2953-0136-9c41-525400dfdca6/e/636f37e0-f70b-0135-4977-525400970412/img/heading-brush.png) "
      }}> */}
  {/* <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
    <div className="black">
      <h3 className="py-3 font-weight-bold">
        <strong> What's Special</strong>
      </h3>
      <h6 className="purple-text">
        <strong> For today?</strong>
      </h6>
    </div>
  </div> */}
{/* </MDBCard> */}
{/* </MDBCol> */}
{/* <section className="footerPic"> */}
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
     {/* </section> */}
</>
  );
}

const mapStateToProps = (state) =>{
  console.log('state from categories------>',state);
  return {
    categories: state.categories,
    data : state.products.products,
    currentPage: state.pagination.currentPage,
    user :  state.auth.user ,
    token : state.auth.token ,
  };
} ;

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getRemoteData() ),
  getRemoteProduct: (id) => dispatch(getRemoteProduct(id) ),
  getFav:(token) => dispatch(getFav(token)),
  getFilteredProducts: (category) => dispatch(getFilteredProducts(category) ),
  addToFav: (id ,token ) => dispatch(addToFav(id ,token)),
  ratePost: ( id , token , rate ) => dispatch(ratePost(id , token , rate)),
});
export default connect(mapStateToProps  , mapDispatchToProps)(Products);