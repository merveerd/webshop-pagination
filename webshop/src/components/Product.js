import React from "react";
import { Button } from "./Button";
const Product = (props) => {
  let name = props.item.slug.replaceAll("-", " ");
  return (
    <div style={styles.product} key={props.item.slug}>
      <div style={styles.imageContainer}>
        <div style={styles.image}></div>
      </div>
      <p style={styles.price}>₺{props.item.price}</p>
      <p style={styles.name}>{name}</p>

      <img src={props.item.thumbnailUrl} alt="" />
      <Button
        onClick={() => {
          props.setBasket({ price: props.item.price, name: props.item.name });
        }}
        text="Add"
      />
    </div>
  );
};

const styles = {
  product: {
    display: "flex",
    flexDirection: "column",
    width: "9vw",
    margin: "0.8rem",
    boxSizing: "border-box",
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "9vw",
    height: "9vw",
    backgroundColor: "#FEFEFE",
    border: "1.17666px solid #F3F0FE",
    borderRadius: "0.6rem",
  },
  image: {
    backgroundColor: "#C4C4C4",
    width: "75%",
    height: "75%",
  },
  price: {
    color: "#1EA4CE",
    fontFamily: "Helvetica",
    margin: "4%",
  },

  name: {
    lineHeight: "125%",
    width: "100%",
    height: "7vh",
  },
};

export { Product };
