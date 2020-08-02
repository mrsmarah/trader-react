import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handelCategory } from '../../store/reducers/categories';
import { useEffect } from 'react';
import Parallax from './parallax.js';


const OneCategory = (props) => {

  let{category} = useParams();
  console.log('props.categories',props.categories);
  
  useEffect(() => {
    console.log('CATEGORY',category);
    props.getCategory(category, props.categories.activeCategoryImg);
    
  },[]);

  return (
    <>
      <div>
        <Parallax/>
        <span>
          <h4>{ props.categories.activeCategory}</h4>
        </span>
        <img src={ props.categories.activeCategoryImg} alt='active Category Img'/>
      </div>

    </>
  );
};
 

const mapStateToProps = (state) => {
  return { categories: state.categories,
  };
};
  
const mapDispatchToProps = (dispatch) => ({
  getCategory: (category, img) => dispatch(handelCategory(category , img)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OneCategory);
  


