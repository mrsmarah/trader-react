import React from 'react';
import { connect } from 'react-redux';
import { handelCategory, getCategories } from '../../store/reducers/categories';
import { getFilteredProducts } from '../../store/reducers/products';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {Carousel} from 'react-bootstrap';
import './categories.scss'
import { MDBCol,MDBCard,MDBIcon,MDBCardTitle } from "mdbreact";
const Categories = (props) => {

  useEffect(() => {
    props.getCategories();
  }, []);

  return (
    <>
        <section className="carouselContainer">
        <Carousel>
        {props.categories.categories.map((category) => {
          return (
       
                <Carousel.Item  key={category.categories} onClick={() =>{
                props.handelCategory(category.categories);
                props.getFilteredProducts(category.categories);
              }}>
                  <img
                    className="d-block w-100"
                    src="https://i2.wp.com/essblog.wpengine.com/wp-content/uploads/2017/08/selling-furniture-online.jpg?resize=1000%2C400&ssl=1"
                    alt="First slide"
                  />
                 
                  <Carousel.Caption>
                    <div className="h-three-para">
                     <h3 className="h-three">
                        <Link to={`/searchBy/${category.categories}`} >
                        <div class="svg-wrapper">
                            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                              <rect class="shape" height="60" width="320" />
                            </svg>
                            <div class="text"> {category.categories}</div>
                          </div>
                        </Link>
                     </h3><br/>
                     <p className="para">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                     </div>
                  </Carousel.Caption>
               </Carousel.Item>
          );
        })}
       </Carousel>
       </section>

       <MDBCol md="12" className="mb-4">

        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://www.kindpng.com/picc/m/41-418824_transparent-dark-clouds-png-png-download.png)"
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

    </>
  );
};


const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handelCategory: (category) => dispatch(handelCategory(category)),
  getFilteredProducts: (category) => dispatch(getFilteredProducts(category)),
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
