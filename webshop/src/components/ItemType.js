import React from "react";
import styled from "styled-components";

const TypeButton = styled.button`
  background-color: ${(props) => (props.selected ? "#1EA4CE" : "#F2F0FD")};
  color: ${(props) => (props.selected ? "#F2F0FD" : "#1EA4CE")};
  display: flex;
  justify-content: center;
  width: 3.6rem;
  height: 2rem;
  border: none;
  border-radius: 0.2rem;
  margin: 0.3rem;
  align-items: center;
  font-family: Open Sans;
  outline: none;
`;

const ItemType = (props) => {
  let active = false;
  if (props.type === props.selected) {
    active = true;
  }
  return (
    <TypeButton selected={active} value={props.type} onClick={props.onClick}>
      {props.type}
    </TypeButton>
  );
};

export { ItemType };
