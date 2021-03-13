import React from "react";
import styled from "styled-components";
import { device } from "../../constants";

const Name = styled.p`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  color: #525252;
  font-family: Open Sans;
  font-size: 0.95rem;
  white-space: ${(p) => (p.oneLine ? "nowrap" : "wrap")};

  @media only screen and ${device.sm} {
    font-size: 12px;
  }
`;

const OptionName = (props) => {
  return (
    <Name oneLine={props.oneLine}>
      {props.name} {props.showCount && <span> ({props.count})</span>}
    </Name>
  );
};

export { OptionName };
