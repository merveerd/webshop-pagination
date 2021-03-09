import { Product } from "./Product";
import ListPagination from "./ListPagination";
import React from "react";

const List = (props) => {
  return (
    <div>
      {props.items.map((item, index) => {
        return <Product item={item} key={index} />;
      })}

      <ListPagination
        itemsCount={16}
        currentPage={props.currentPage}
        setPage={props.setPage}
      />
    </div>
  );
};

export { List };
