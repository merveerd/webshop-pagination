import React from "react";

const ItemType = (props) => {
  return (
    <div style={styles.itemType} onClick={props.onClick}>
      <p style={styles.type}>{props.type}</p>
    </div>
  );
};

const styles = {
  itemType: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F2F0FD",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: "0.5rem",
    borderRadius: "0.2rem",
    width: "3.6rem",
    height: "2rem",
    margin: "0.3rem",
  },

  itemTypeActive: {
    backgroundColor: "#1EA4CE",
  },

  type: {
    alignSelf: "center",
    color: "#1EA4CE",
    fontSize: "0.7rem",
    LineHeight: "18px",
    fontFamily: "Open Sans",
  },
};

export { ItemType };
