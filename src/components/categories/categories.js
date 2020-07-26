import React from 'react';
import { connect } from 'react-redux';
import { handelCategory, getCategories } from '../../store/reducers/categories';
import {getFilteredProducts} from '../../store/reducers/products';

import { useEffect } from 'react';


const Categories = (props) => {

  useEffect(() => {
    props.getCategories();
  },[]);

  return (
    <>
      <h3>Categories:</h3>
        
      <div>
        {props.categories.categories.map((category) => {
          return (
            <ul>
              <li key={category.categories} onClick={() =>{
                props.handelCategory(category.categories);
                props.getFilteredProducts(category.categories);
              }}>
                {category.categories}
              </li>
            </ul>
          );
        })}
      </div>

      <h4>Active category : { props.categories.activeCategory}</h4>
              
    </>
  );
};
 

const mapStateToProps = (state) => {
  return { categories: state.categories,
    products: state.products.products ,
  };
};
  
const mapDispatchToProps = (dispatch) => ({
  handelCategory: (category) => dispatch(handelCategory(category)),
  getFilteredProducts: (category) => dispatch(getFilteredProducts(category)),
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
  


