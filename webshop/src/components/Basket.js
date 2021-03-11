import React from "react";
import styled from "styled-components";

import { BasketProduct } from "./BasketProduct";
const BasketContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 18%;
  height: 17rem;
  border: 0.45rem solid #1ea4ce;
  border-radius: 0.2rem;
`;

const BasketProductContainer = styled.div`
  overflow-y: scroll;
  background-color: #ffffff;
  display: flex;
  height: 13rem;
  position: relative;
  flex-direction: column;
`;

const TotalPrice = styled.div`
  background-color: #ffffff;
  display: flex;
  position: absolute;
  right: 5%;
  top: 80%;
  flex-direction: column;
  justify-content: center;
  width: 36%;
  height: 15%;
  border: 0.15rem solid #1ea4ce;
  color: #1ea4ce;
  border-radius: 0.1rem;
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
