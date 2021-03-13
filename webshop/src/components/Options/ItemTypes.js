import React from "react";
import styled from "styled-components";
import { ItemType } from "./ItemType";
import { Wrapper } from "../SharedStyledComponents";
const TypeContainer = styled(Wrapper)`
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  flex-direction: row;
`;

const ItemTypes = (props) => (
  <TypeContainer>
    <ItemType
      type="mug"
      selected={props.selected}
      onClick={(e) => {
        props.onClick(e);
      }}
    />
    <ItemType
      type="shirt"
      selected={props.selected}
      onClick={(e) => {
        props.onClick(e);
      }}
    />
  </TypeContainer>
);
export { ItemTypes };
