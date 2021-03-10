import { Product } from "./Product";
import ListPagination from "./ListPagination";
import React from "react";
import { ItemType } from "./ItemType";
const List = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.typeContainer}>
        <ItemType type="mug" />
        <ItemType type="shirt" />
      </div>

      <section style={styles.list}>
        {props.items.map((item, index) => {
          return (
            <Product item={item} key={index} setBasket={props.setBasket} />
          );
        })}

        <ListPagination
          currentPage={props.currentPage}
          setPage={props.setPage}
        />
      </section>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    marginTop: "5vw",
  },

  typeContainer: {
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
    display: "flex",
    flexDirection: "row",
  },

  list: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#FEFEFE",
  },
};
export { List };
