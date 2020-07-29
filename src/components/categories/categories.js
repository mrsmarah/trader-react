import React from 'react';
import { connect } from 'react-redux';
import { handelCategory, getCategories } from '../../store/reducers/categories';
import { getFilteredProducts } from '../../store/reducers/products';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {Carousel} from 'react-bootstrap';
import './categories.scss'

const Categories = (props) => {

  useEffect(() => {
    props.getCategories();
  }, []);

  return (
    <>
        
        <Carousel>
        {props.categories.categories.map((category) => {
          return (
       
                <Carousel.Item  key={category.categories} onClick={() =>{
                props.handelCategory(category.categories);
                props.getFilteredProducts(category.categories);
              }}>
                  <img
                    className="d-block w-100"
                    src="https://buranosa.com/wp-content/themes/velo/assets/img/placeholder/full.png"
                    alt="First slide"
                  />
                 
                  <Carousel.Caption>
                     <h3 className="h-three">
                        <Link to={`/searchBy/${category.categories}`} >
                         {category.categories}
                        </Link>
                     </h3>
                     <p className="para">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
               </Carousel.Item>
          );
        })}
       </Carousel>

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
