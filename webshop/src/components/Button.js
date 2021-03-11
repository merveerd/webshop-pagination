import React, { memo } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #1ea4ce;
  border-radius: 2px;
  font-family: Open Sans;
  border: none;
  box-sizing: border-box;
  color: #ffffff;
  width: 100%;
  height: 1.3rem;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const Button = memo((props) => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
});

export { Button };
