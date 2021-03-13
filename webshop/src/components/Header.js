import React, { memo } from "react";
import styled from "styled-components";
import { device } from "../constants";
const HeaderWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  background-color: #1ea4ce;
  color: #ffffff;
`;

const Title = styled.p`
  width: 10%;
  margin-left: 45%;
  display: flex;
  align-self: center;
  font-size: 2rem;
`;

const BasketPointer = styled.div`
  width: 10%;
  margin-left: 29%;
  background-color: #1b83a7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Open Sans;
  font-weight: 600;
  @media only screen and ${device.xs} {
    width: 20%;
    margin-left: 25%;
  }
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
