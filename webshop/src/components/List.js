import React, { memo } from "react";
import { Product } from "./Product";
import ListPagination from "./ListPagination";

const List = memo((props) => {
  return (
    <section style={styles.list}>
      {props.items.map((item, index) => {
        return <Product item={item} key={index} addBasket={props.addBasket} />;
      })}

      <ListPagination
        pageCount={props.pageCount}
        setPage={props.setPage}
        currentPage={props.currentPage}
      />
    </section>
  );
});

const styles = {
  list: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "#FEFEFE",
  },
};
export { List };
