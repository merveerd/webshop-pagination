import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  width: 85%;
  border-bottom: 0.1rem solid #e5e5e5;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ProductName = styled.p`
  width: 6rem;
  color: #191919;
  font-size: 0.9rem;
`;

const ProductPrice = styled.p`
  display: flex;
  color: #1ea4ce;
  line-height: 1.1rem;
  letter-spacing: 0.16px;
  font-family: Open Sans;
  font-size: 0.9rem;
`;

const QuantityWrapper = styled.div`
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ProductQuantity = styled.p`
  width: 50%;
  padding: 0.2rem;
  margin: 0.4rem;
  color: #ffffff;
  background-color: #1ea4ce;
  display: flex;
  justify-content: center;
  line-height: 20px;
  letter-spacing: 0.16px;
  font-family: Open Sans;
  font-size: 1rem;
`;

const QuantityEditButton = styled.div`
  width: 2rem;
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
