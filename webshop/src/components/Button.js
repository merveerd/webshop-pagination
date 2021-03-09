import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      <p>{props.text}</p>
    </button>
  );
};

export { Button };
