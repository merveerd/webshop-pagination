import { Product } from "./Product";
import ListPagination from "./ListPagination";
import React from "react";

const List = (props) => {
  return (
    <section style={styles.list}>
      {props.items.map((item, index) => {
        return <Product item={item} key={index} setBasket={props.setBasket} />;
      })}

      <ListPagination currentPage={props.currentPage} setPage={props.setPage} />
    </section>
  );
};

const styles = {
  list: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "#FEFEFE",
  },
};
export { List };
