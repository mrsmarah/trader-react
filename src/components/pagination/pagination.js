import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getPagination} from '../../store/reducers/pagination';
import Pagination from 'react-bootstrap/Pagination';


function PaginationComponent(props) {

  let currentItems = [];
  let pageNumbers = [];
  if (props.currentPage && props.itemPerPage) {
    let idxOfLastItem = props.currentPage * props.itemPerPage;
    let idxOfFirstItem = idxOfLastItem - props.itemPerPage;
    
    currentItems = props.products.slice(idxOfFirstItem, idxOfLastItem);    
    console.log('PROPSSS', props.itemPerPage, currentItems);
    for (let i = 1; i <= Math.ceil(props.products.length / props.itemPerPage); i++) {
      pageNumbers.push(i);
    }
  }
  if (!currentItems.length) {
    console.log('empty');
    currentItems= props.products;
  };
  return (
    <Pagination>
      {pageNumbers.map(number => (
        <Pagination.Item key={number} onClick={()=>props.getPagination(number, 3, currentItems)}>
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

const mapStateToProps = (state) => {
  console.log('pagination', state);
  return {
    products: state.products.products,
    currentPage: state.pagination.currentPage,
    itemPerPage: state.pagination.itemPerPage,
    currentItems: state.pagination.currentItems,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getPagination : (currentPage, itemPerPage, currentItems) => dispatch(getPagination(currentPage, itemPerPage, currentItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);


// function PaginationBar(props) {
//   let active = 2;
//   let items = [];
//   for (let number = 1; number <= 15; number++) {
//     items.push(
//       <Pagination.Item key={number} active={number === active}>
//         {number}
//       </Pagination.Item>,
//     );
//   }
//   return (
//     <Pagination>{items}</Pagination>
//   );
// }

// export default PaginationBar;