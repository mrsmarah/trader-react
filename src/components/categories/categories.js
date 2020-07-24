import React from 'react';
import { connect } from 'react-redux';
import { handelCategory, getRemoteData } from '../../store/actions/categories';
import { useEffect } from 'react';


const Categories = (props) => {

  useEffect(() => {
    props.getRemoteData();
  });

  return (
    <>
      <h3>Categories:</h3>
        
      <div>
        {props.categories.categories.map((category,i) => {
          return (
            <ul>
              <li key={i} color="inherit" onClick={() =>{
                props.handelCategory(category.name);
              }}>
                {category.displayName}
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
  getRemoteData: () => dispatch(getRemoteData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
  


