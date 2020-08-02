import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handelCategory } from '../../store/reducers/categories';
import { useEffect } from 'react';
import Parallax from './parallax.js';


const OneCategory = (props) => {

  let{category} = useParams();
  
  
  useEffect(() => {
    console.log('CATEGORY',category);
    props.getCategory(category);
    
  },[]);

  return (
    <>
      <div>
        <Parallax/>
        <span>
        <h4>{ props.categories.activeCategory}</h4>

        </span>
        
      </div>

    </>
  );
};
 

const mapStateToProps = (state) => {
  return { categories: state.categories,
  };
};
  
const mapDispatchToProps = (dispatch) => ({
  getCategory: (category) => dispatch(handelCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OneCategory);
  


