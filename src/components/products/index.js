import React , { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {getRemoteData,getFav} from '../../store/reducers/products';
import {getRemoteProduct } from '../../store/reducers/post';
import {getFilteredProducts} from '../../store/reducers/products';
import {addToFav } from '../../store/reducers/post';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { MDBIcon , MDBCol ,MDBCard, MDBCardImage , MDBBtn , MDBRow , MDBCardBody , MDBCardTitle , MDBCardText } from "mdbreact";
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


<MDBRow>
      <MDBCol md="4">
        <MDBCard cascade>
          <MDBCardImage
            cascade
            className='img-fluid'
            overlay="white-light"
            hover
            src='https://mdbootstrap.com/img/Photos/Others/food.jpg'
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
            <ul className='list-unstyled list-inline font-small'>
              <li className='list-inline-item pr-2 white-text'>
                <MDBIcon far icon='clock' /> 05/10/2015
              </li>
              <li className='list-inline-item pr-2'>
                <a href='#!' className='white-text'>
                  <MDBIcon far icon='comments' className='mr-1' />
                  12
                </a>
              </li>
              <li className='list-inline-item pr-2'>
                <a href='#!' className='white-text'>
                  <MDBIcon fab icon='facebook-f' className='mr-1' />
                  21
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#!' className='white-text'>
                  <MDBIcon fab icon='twitter' className='mr-1' />5
                </a>
              </li>
            </ul>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>

              
              {/* <MDBRow>
      <MDBCol md="4">
        <MDBCard cascade>
          <MDBCardImage
            cascade
            className='img-fluid'
            overlay="white-light"
            hover
            src='https://mdbootstrap.com/img/Photos/Others/food.jpg'
          />

          <MDBBtn 
            href={`/search/${product._id}`}
            floating
            tag='a'
            className='ml-auto mr-4 lighten-3 mdb-coalor'
            action  
          >
            <MDBIcon icon='chevron-right' className="mdb-color lighten-3"/>
          </MDBBtn>


          <MDBCardBody cascade>
            <MDBCardTitle>{product.title}</MDBCardTitle>
            <hr/> */}
            {/* <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText> */}
          {/* </MDBCardBody>
        
        </MDBCard>
      </MDBCol>
    </MDBRow> */}
           {/* <section>   
               <MDBRow>
      <MDBCol md="4">
        <MDBCard cascade>

        {/* <div class="stage"> */}

{/* <div class="is-relative"> */}
  {/* <img src="https://mdbootstrap.com/img/Photos/Others/food.jpg" alt="" /> */}

        {/* <MDBIcon icon="heart" size="3x" className="indigo-text pr-3" onClick={ () =>{
                      props.addToFav(product._id, props.token );
                    }} /> */}
         {/* <div class="is-relative"> */}
           
          {/* <MDBCardImage
            cascade
            className='img-fluid firstPic'
            overlay="white-light"
            hover
            src='https://mdbootstrap.com/img/Photos/Others/food.jpg'
          />

          <MDBBtn onClick={()=> props.getRemoteProduct(product._id)} variant="light" className="hoverBtn" 
            floating
            tag='a'
            className='ml-auto mr-4 lighten-3 mdb-coalor btn-floating btn-action waves-effect waves-light '
            action
         > <Link to={`/search/${product._id}`} ></Link>
            <MDBIcon icon='chevron-right fa fa' className="mdb-color lighten-3"/>
          </MDBBtn>
          <MDBCardBody cascade>
            <MDBCardTitle>{product.title}</MDBCardTitle>
            <hr/>
            <MDBCardText>
            {product.description}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </section>  */} 
                {/* <div className="grid">
                <div class="hover">
                <MDBIcon icon="heart" size="3x" className="indigo-text pr-3" onClick={ () =>{
                      props.addToFav(product._id, props.token );
                    }} />
                <img className='firstPic' variant="top" src="https://via.placeholder.com/300" />
                <h5>
                {product.username}
                </h5>
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
                       
                     {/* </section>
                </Card.Body>
              </Card>
                </div> */}
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