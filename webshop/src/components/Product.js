import React from "react";
import { Button } from "./Button";
const Product = (props) => {
  return (
    <div key={props.item.slug}>
      <p>{props.item.slug}</p>
      <p>{props.item.price}</p>
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

export { Product };
