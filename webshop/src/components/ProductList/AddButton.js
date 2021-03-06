import React, { memo } from "react";
import styled from "styled-components";
import { device } from "../../constants";
import { font, bg } from "../../style/sharedStyle";
const StyledButton = styled.button`
  width: 100%;
  height: 1.3rem;
  border-radius: 2px;
  border: none;
  box-sizing: border-box;
  ${bg.mainBlue};
  ${font.white}
  font-family: Open Sans;
  outline: none;
  &:hover {
    cursor: pointer;
  }

  @media only screen and ${device.xs} {
    height: 2rem;
  }
`;

const AddButton = memo((props) => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
});

export { AddButton };
