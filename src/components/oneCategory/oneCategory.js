import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handelCategory } from '../../store/reducers/categories';
import { useEffect } from 'react';


const OneCategory = (props) => {

  let{category} = useParams();

  useEffect(() => {
    props.getCategory(category);
  },[]);

  return (
    <>
      <div>
        <h4>Active category : { props.categories.activeCategory}</h4>
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
  


