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
      {/* <section className="productContainer"> */}
      {/* {props.data.map((product , i) =>{ */}
      <section className="cardsZZ">
        {currentItems.map((product , i) =>{
          return (
            <>
              {/* <Show condition={props.loggedIn} >
                {(redirect === true) ? <Redirect to='/' /> : null }
              </Show> */}
              {/* <div className="shadow-box-example hoverable" > */}

       
              <div className ="cardzz card--1">
                <div className ="card__info-hover">
                  <svg className ="card__like"  viewBox="0 0 24 24" style={{
                    pointerEvents: 'bounding-box'
                  }} onClick={() =>{
                    props.addToFav(product._id, props.token );
                    alert('Post added to your favorite list !');
                  }}>
                    <path 
                      d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 
    4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,
    6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 
    9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36
     22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />

                  </svg>
                </div>
                <div className ="card__img"
                  style={{
                    backgroundImage: `url(${product.images[0]})`,
                  }}
                ></div>
                <Link to={`/search/${product._id}`} className="card_link">
                  <div className="card__img--hover"style={{
                    backgroundImage:  `url(${product.images[0]})`,
                  }}></div>
                </Link>
                <div className ="card__info">
  
                  <h3 className="card__title">{product.title}</h3>
                  <span className="card__category"> {product.description}</span>
                  <span className="card__by">by <Link to={`/user/${product.username}`}
                    className="card__author" >{product.username}
                  </Link> </span>
                  <div className="likeDislike">
                    <div>
                      <MDBIcon 
                        icon="thumbs-up card__like"
                        onClick={() =>{
                          props.ratePost(product._id, props.token , {'theRate':'+'} );
                          console.log('hi')
                        }} />
                      <p>{product.positiveRateUser.length}</p>
                    </div>
                    <div>
                      <MDBIcon 
                        icon="thumbs-down card__like"
                        onClick={() =>{
                          props.ratePost(product._id, props.token , {'theRate':'-'});
                        }} />
                      <p>{product.negativeRateUser.length}</p>
                    </div>
                  </div>
                </div>
              </div>
                
              {/* </div> */}

            </>
          );
        })
        }
      </section>
      {/* </section> */}
      {/* </section> */}
      <Pagination pageNumbers={pageNumbers}/>

      <section className="threeCard">
        <MDBCol>
          <MDBCard
            className="card-image imageCard"
            style={{
              backgroundImage:
        'url(\'https://cdn.vox-cdn.com/thumbor/3SDag4_szhZrsfE86H7OGXcesxs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19395168/vpavic_191118_3800_0122.jpg\')'
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
        'url(\'https://img.freepik.com/free-vector/delivery-service-with-masks-illustration_23-2148501978.jpg?size=338&ext=jpg\')'
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
        'url(\'https://vips.org/wp-content/uploads/2017/12/ribbonhand1.jpg\')'
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

{/* <MDBCol md="4">
<MDBCard cascade>
  <MDBIcon
    icon='heart'
    className='cyan-text card__like'
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
    src= {product.images[0] ||'https://images.vexels.com/media/users/3/136558/isolated/lists/43cc80b4c098e43a988c535eaba42c53-person-user-icon.png'}
  />

  <img className="userImgInCard"
    src={!product.userImage?'https://images.vexels.com/media/users/3/136558/isolated/lists/43cc80b4c098e43a988c535eaba42c53-person-user-icon.png':product.userImage}
    alt=''
  /> <span><Link to={`/user/${product.username}`}
  >{product.username}
  </Link></span>
    
  <MDBCardBody cascade>
    <Link to={`/search/${product._id}`}>   
      <div className="btn-title">
      
        <MDBCardTitle>{product.title}</MDBCardTitle>

      
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
</MDBCol> */}
{/* 

<img className="userImgInCard"
                      src={!product.userImage?'https://images.vexels.com/media/users/3/136558/isolated/lists/43cc80b4c098e43a988c535eaba42c53-person-user-icon.png':product.username}
                      alt=''
                    /> */}