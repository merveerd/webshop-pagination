import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  align-items: center;
  border-bottom: 0.1rem solid #e5e5e5;
  padding: 0.8rem;
`;

const ProductNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ProductName = styled.p`
  color: #191919;
  font-size: 0.9rem;
`;

const ProductPrice = styled.p`
  display: flex;
  color: #1ea4ce;
  line-height: 18px;
  letter-spacing: 0.16px;
  font-family: Open Sans;
  font-size: 14px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 35%;
`;

const ProductQuantity = styled.p`
  display: flex;
  justify-content: center;
  color: #ffffff;
  background-color: #1ea4ce;
  line-height: 20px;
  letter-spacing: 0.16px;
  font-family: Open Sans;
  font-size: 1rem;
  padding: 0.2rem;
  width: 50%;
  margin: 0.4rem;
`;

const QuantityEditButton = styled.div`
  display: flex;
  justify-content: center;
  color: #1ea4ce;
  font-size: 1.4rem;
  &:hover {
    cursor: pointer;
  }
`;

const BasketProduct = (props) => {
  return (
    <ProductWrapper>
      <ProductNameWrapper>
        <ProductName>{props.name}</ProductName>
        <ProductPrice>₺{props.price}</ProductPrice>
      </ProductNameWrapper>
      <QuantityWrapper>
        <QuantityEditButton
          onClick={() => {
            props.decreaseQuantity({
              price: props.price,
              name: props.name,
            });
          }}
        >
          -
        </QuantityEditButton>
        <ProductQuantity>{props.quantity}</ProductQuantity>
        <QuantityEditButton
          onClick={() => {
            props.increaseQuantity({
              price: props.price,
              name: props.name,
            });
          }}
        >
          +
        </QuantityEditButton>
      </QuantityWrapper>
    </ProductWrapper>
  );
};

export { BasketProduct };
