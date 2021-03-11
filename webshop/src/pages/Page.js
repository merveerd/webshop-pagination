import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  getCompanies,
  getPageDefaultItems,
  getSelectedItems,
  setPage,
  setItemType,
  addBasket,
  reduceBasket,
} from "../actions";
import { List, Header, ItemTypes, Basket, MainTitle } from "../components";
import { totalPrice } from "../reducers/BasketReducer";
import { currentPage, currentPageItems } from "../reducers/ItemsReducer";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 3vw;
`;

const ProductSectionWrapper = styled.div`
  width: 44%;
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  margin-right: 2%;
`;
const Page = (props) => {
  const {
    pageCount,
    currentPage,
    currentPageItems,
    selectedType,
    defaultItems,
    basket,
    totalPrice,
    addBasket,
    reduceBasket,
  } = props;

  useEffect(() => {
    props.getCompanies();
    props.getPageDefaultItems(1);
  }, []);

  useEffect(() => {
    !selectedType && props.getPageDefaultItems(currentPage);
  }, [currentPage]);

  const chooseItemType = useCallback((e) => {
    const currentSelectedType = e.target.value;

    if (currentSelectedType === selectedType) {
      props.setItemType("");
      props.getPageDefaultItems(1);
    } else {
      props.getSelectedItems({
        selectedType: currentSelectedType,
        currentPage: 1,
      });
    }
    props.setPage({ selected: 0 }); //simulate react-paginate component event
  });

  return (
    <>
      <Header totalPrice={totalPrice.toFixed(2)} />
      {defaultItems.length > 0 && (
        <MainContainer>
          <Basket />
          <ProductSectionWrapper>
            <MainTitle />
            <ItemTypes onClick={chooseItemType} selected={props.selectedType} />

            <List
              items={currentPageItems}
              currentPage={currentPage}
              pageCount={pageCount}
              setPage={props.setPage}
              addBasket={addBasket}
            />
          </ProductSectionWrapper>
          <Basket
            basket={basket}
            addBasket={addBasket}
            totalPrice={totalPrice.toFixed(2)}
            reduceBasket={reduceBasket}
          />
        </MainContainer>
      )}
    </>
  );
};

const mapDispatchToProps = {
  getCompanies,
  setPage,
  setItemType,
  getPageDefaultItems,
  getSelectedItems,
  addBasket,
  reduceBasket,
};

const mapStateToProps = ({
  companiesResponse,
  itemsResponse,
  basketResponse,
}) => {
  const { companies } = companiesResponse;
  const { defaultItems, selectedType, pageCount, loading } = itemsResponse;
  const { basket } = basketResponse;

  return {
    companies,
    defaultItems,
    loading,
    selectedType,
    pageCount,
    currentPage: currentPage(itemsResponse),
    currentPageItems: currentPageItems(itemsResponse),
    basket,
    totalPrice: totalPrice(basketResponse),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);
