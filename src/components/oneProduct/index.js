import React , { useEffect } from 'react';
import {connect} from 'react-redux';
import getRemoteProduct from '../../store/reducers/products.js';


function product (props){

    return (
        <section>
            <ul>
                            <li>
                                <span>{props.data.title}</span>
                                {console.log('hello zz', props.data)}
                            </li>
                
            </ul>
        </section>
    )
}

const mapStateToProps = (state) =>{
  return {data : state.products.products}
} 
const mapDispatchToProps = (dispatch) => ({
    get: () => dispatch(action.getRemoteProduct()),
  });
export default connect(mapStateToProps , mapDispatchToProps )( product );