import React, { memo } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  background-color: #1ea4ce;
  border: none;
  color: #ffffff;
  width: 100%;
  height: 5.2vw;
`;

const Title = styled.p`
  display: flex;
  align-self: center;
  width: 10%;
  margin-left: 45%;
  font-size: 2rem;
`;

const BasketPointer = styled.div`
  display: flex;
  background-color: #1b83a7;
  width: 10%;
  height: auto;
  margin-left: 28%;
  align-items: center;
  justify-content: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
`;
const Header = memo((props) => {
  return (
    <HeaderWrapper>
      <Title>Market</Title>
      <BasketPointer>₺ {props.totalPrice}</BasketPointer>
    </HeaderWrapper>
  );
});

export { Header };
