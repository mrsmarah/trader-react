import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getPagination} from '../../store/reducers/pagination';
import Pagination from 'react-bootstrap/Pagination';


function PaginationComponent(props) {

  
  return (
    <Pagination>
      {props.pageNumbers.map(number => (
        <Pagination.Item key={number} onClick={()=>props.getPagination(number)}>
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

const mapStateToProps = (state) => {
  return {
    // products: state.products.products,
    // currentPage: state.pagination.currentPage,
    // itemPerPage: state.pagination.itemPerPage,
    // currentItems: state.pagination.currentItems,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getPagination : (currentPage) => dispatch(getPagination(currentPage)),
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