import React from "react";

const ListPagination = (props) => {
  const range = [];
  for (let i = 1; i <= 20; i++) {
    range.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {range.map((pageNumber) => {
          const isCurrent = pageNumber === props.currentPage;
          const onClick = (event) => {
            event.preventDefault();

            props.setPage(pageNumber);
          };
          return (
            <li
              className={isCurrent ? "page-number active" : "page-number"}
              onClick={onClick}
              key={pageNumber.toString()}
            >
              <a href="">{pageNumber}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ListPagination;
