import React from 'react';
import { connect } from 'react-redux';
import { handelCategory, getCategories } from '../../store/reducers/categories';
import {handelProduct} from '../../store/reducers/products';

import { useEffect } from 'react';


const Categories = (props) => {

  useEffect(() => {
    props.getCategories();
  },[]);

  return (
    <>
      <h3>Categories:</h3>
        
      <div>
        {props.categories.map((category) => {
          return (
            <ul>
              <li key={category.categories} onClick={() =>{
                props.handelCategory(category.categories);
                props.handelProduct(category.categories);
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
  return { categories: state.categories.categories,
    products: state.products.products ,
  };
};
  
const mapDispatchToProps = (dispatch) => ({
  handelCategory: () => dispatch(handelCategory()),
  handelProduct: (category) => dispatch(handelProduct(category)),
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
  


