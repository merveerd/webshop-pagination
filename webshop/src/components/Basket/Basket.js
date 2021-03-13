import React from "react";
import styled from "styled-components";
import { device } from "../../constants";
import { BasketProduct } from "./BasketProduct";
import { bg, font } from "../../style/sharedStyle";
const BasketContainer = styled.div`
  position: relative;
  width: 20%;
  height: 17rem;
  border: 0.45rem solid #1ea4ce;
  border-radius: 0.2rem;
  box-sizing: border-box;
  ${bg.white}
  display: flex;
  flex-direction: column;
  @media only screen and ${device.xs} {
    display: none;
  }
`;

const BasketProductContainer = styled.div`
  position: relative;
  height: 13rem;
  ${bg.white};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const TotalPrice = styled.div`
  position: absolute;
  width: 36%;
  height: 15%;
  border: 0.15rem solid #1ea4ce;
  border-radius: 0.1rem;
  right: 5%;
  top: 80%;
  ${bg.white};
  ${font.mainBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Basket = (props) => {
  return (
    <BasketContainer>
      <BasketProductContainer>
        {props.basket &&
          props.basket.map((item, index) => {
            return (
              <BasketProduct
                key={index}
                quantity={item.quantity}
                name={item.name}
                price={item.price}
                increaseQuantity={props.addBasket}
                decreaseQuantity={props.reduceBasket}
              />
            );
          })}
      </BasketProductContainer>
      <TotalPrice>₺{props.totalPrice}</TotalPrice>
    </BasketContainer>
  );
};

export { Basket };
