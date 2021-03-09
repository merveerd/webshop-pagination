import React from "react";
import img from "../assets/loading_spinner.gif";
let Loading = (props) => {
  return props.loading ? (
    <div style={{ textAlign: "center" }}>
      <img src={img} alt="loading" />
      <h1>LOADING</h1>
    </div>
  ) : null;
};
export { Loading };
