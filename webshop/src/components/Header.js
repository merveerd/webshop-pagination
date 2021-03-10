import React from "react";

const Header = (props) => {
  return (
    <div style={styles.header}>
      <p style={styles.title}>Market</p>
      <div style={styles.basketPointer}></div>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",

    position: "absolute",
    backgroundColor: "#1ea4ce",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: "1rem",
    border: "none",
    color: "#FFFFFF",
    width: "100%",
    height: "5vw",
  },
  basketPointer: {
    backgroundColor: "#1B83A7",
    width: "10%",
    height: "auto",
    marginLeft: "30%",
  },
  title: {
    display: "flex",
    alignSelf: "center",
    width: "10%",
    marginLeft: "45%",
  },
};

export { Header };
