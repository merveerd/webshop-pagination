import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 47%;
  text-align: center;
`;

let Loading = (props) => {
  return (
    <LoadingContainer>
      <h3>No data found</h3>
    </LoadingContainer>
  );
};
export { Loading };
