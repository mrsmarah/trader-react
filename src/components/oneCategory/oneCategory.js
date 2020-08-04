import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handelCategory } from '../../store/reducers/categories';
import { useEffect } from 'react';
// import Parallax from './parallax.js';
import { Parallax } from 'react-parallax';
import './oneCategory.scss'
const OneCategory = (props) => {
  
  let{category} = useParams();
  console.log('props.categories',props.categories);
  
  useEffect(() => {
    console.log('CATEGORY',category);
    props.getCategory(category, props.categories.activeCategoryImg);
    
  },[]);
  return (
    <>

<section id="hero1" className="hero" 
style={{
  height:"400px",
  backgroundImage:`url(${ props.categories.activeCategoryImg})`
}}>
  <div className="inner">
    <div className="copy">
    <h1 className="headerh1">{ props.categories.activeCategory}</h1>
    
    </div>
  </div>
</section>
      {/* <div> */}
      {/* <Parallax bgImage={ props.categories.activeCategoryImg} 
      strength={600}
      style={{
        height: '350px',
      }}>
<div style={{ height: 550,  height: '750px', }}>

</div>
</Parallax> */}
        {/* <span>
          <h4>{ props.categories.activeCategory}</h4>
        </span>
        <img src={ props.categories.activeCategoryImg} alt='active Category Img'
        style={{
          width:'100%',
          height:'60vh'
        }}/>
      </div> */}

{/* <div classNameName="center" style={{
  // backgroundImage: "url({ props.categories.activeCategoryImg})"
}}> */}
  {/* <h1 classNameName="center__text glitch is-glitching" data-text="Hover me!">{ props.categories.activeCategory}</h1>
</div> */}
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