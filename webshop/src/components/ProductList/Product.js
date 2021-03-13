import React, { memo } from "react";
import { AddButton } from "./AddButton";
import styled from "styled-components";
import { device } from "../../constants";
import { Wrapper } from "../SharedStyledComponents";
const ProductWrapper = styled(Wrapper)`
  width: 9vw;
  margin: 0.8rem;
  box-sizing: border-box;
  flex-direction: column;
  @media only screen and ${device.sm} {
    width: 6rem;
  }
  @media only screen and ${device.xs} {
    width: 12rem;
  }
`;

const ImageContainer = styled(Wrapper)`
  width: 9vw;
  height: 9vw;
  border: 1.2px solid #f3f0fe;
  border-radius: 0.6rem;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  @media only screen and ${device.sm} {
    height: 6rem;
    width: 6rem;
  }
  @media only screen and ${device.xs} {
    height: 12rem;
    width: 12rem;
  }
`;

const Image = styled.img`
  width: 75%;
  height: 75%;
  background-color: #c4c4c4;
`;

const Price = styled.p`
  margin: 4%;
  color: #1ea4ce;
  font-family: Helvetica;
  font-weight: 700;
  font-size: 0.9rem;
  @media only screen and ${device.xs} {
    font-size: 1.1rem;
    margin: 2%;
  }
`;

const Name = styled.p`
  width: 100%;
  height: 6.5vh;
  line-height: 125%;
  font-size: 0.9rem;
  display: flex;
  @media only screen and ${device.sm} {
    font-size: 0.9rem;
    line-height: 125%;
    height: 25%;
  }
  @media only screen and ${device.xs} {
    font-size: 1.1rem;
    line-height: 125%;
    height: 15%;
  }
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
      <AddButton
        onClick={() => {
          window.scrollTo(0, 0);
          props.addBasket({ price: props.item.price, name: props.item.name });
        }}
        text="Add"
      />
    </ProductWrapper>
  );
});

export { Product };
