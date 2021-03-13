import React from "react";
import "../../style/Pagination.css";
import ReactPaginate from "react-paginate";

const ListPagination = (props) => {
  return (
    <ReactPaginate
      previousLabel={"<- Prev"}
      nextLabel={"Next ->"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={props.pageCount}
      initialPage={0}
      forcePage={props.currentPage - 1} //index based
      marginPagesDisplayed={4}
      pageRangeDisplayed={4}
      onPageChange={props.setPage}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
      previousClassName={"prev"}
      nextClassName={"next"}
    />
  );
};

export { ListPagination };
