import React from "react";

const Button = (props) => {
  return (
    <button style={styles.button} onClick={props.onClick}>
      <p>{props.text}</p>
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: "#1EA4CE",
    borderRadius: "2px",
    fontFamily: "Open Sans",
    border: "none",
    boxSizing: "border-box",
    color: "#FFFFFF",
    width: "100%",
  },
};

export { Button };
