import React from 'react';
import { connect } from 'react-redux';
import { handelCategory, getCategories } from '../../store/reducers/categories';
import { useEffect } from 'react';


const Categories = (props) => {

  useEffect(() => {
    props.getCategories();
  });

  return (
    <>
      <h3>Categories:</h3>
        
      <div>
        {props.categories.categories.map((category) => {
          return (
            <ul>
              <li key={category.name} onClick={() =>{
                props.handelCategory(category.name);
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
  return { categories: state.categories};
};
  
const mapDispatchToProps = (dispatch) => ({
  handelCategory: () => dispatch(handelCategory()),
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
  


