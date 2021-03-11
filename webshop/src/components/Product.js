import React, { memo } from "react";
import { Button } from "./Button";
import styled from "styled-components";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 9vw;
  margin: 0.8rem;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9vw;
  height: 9vw;
  background-color: #fefefe;
  border: 1.2px solid #f3f0fe;
  border-radius: 0.6rem;
`;

const Image = styled.img`
  background-color: #c4c4c4;
  width: 75%;
  height: 75%;
`;

const Price = styled.p`
  color: #1ea4ce;
  font-family: Helvetica;
  margin: 4%;
  font-weight: 700;
  font-size: 0.9rem;
`;

const Name = styled.p`
  line-height: 125%;
  width: 100%;
  height: 6.5vh;
  font-size: 0.9rem;
`;
const Product = memo((props) => {
  let name = props.item.slug.replaceAll("-", " ");
  return (
    <ProductWrapper>
      <ImageContainer>
        <Image></Image>
      </ImageContainer>
      <Price>₺ {props.item.price}</Price>
      <Name>{name}</Name>
      <Button
        onClick={() => {
          props.addBasket({ price: props.item.price, name: props.item.name });
        }}
        text="Add"
      />
    </ProductWrapper>
  );
});

export { Product };
