import React from "react";
import styled from "styled-components";

const Title = styled.p`
  position: absolute;
  height: 1.1rem;
  display: flex;
  align-items: center;
  color: #697488;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.1rem;
`;

const SelectionTitle = (props) => {
  return <Title onClick={props.onClick}>{props.areaTitle}</Title>;
};

export { SelectionTitle };
