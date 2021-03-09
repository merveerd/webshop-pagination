import React from "react";

const Product = (props) => {
  return (
    <div key={props.item.added}>
      <p>{props.item.slug}</p>
      <p>{props.item.price}</p>
      <img src={props.item.thumbnailUrl} alt="" />
    </div>
  );
};

export { Product };
