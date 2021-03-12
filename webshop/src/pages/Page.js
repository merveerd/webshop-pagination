import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  getCompanies,
  getPageDefaultItems,
  getSelectedItems,
  setSortRule,
  setPage,
  setItemType,
  addBasket,
  reduceBasket,
} from "../actions";
import {
  List,
  ListPagination,
  Header,
  ItemTypes,
  Basket,
  MainTitle,
  Sorting,
} from "../components";
import { totalPrice } from "../reducers/BasketReducer";
import { currentPage, currentPageItems } from "../reducers/ItemsReducer";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 2.5vw;
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
    sortType,
    sortOrder,
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
    selectedType || sortType
      ? props.getSelectedItems({
          selectedType,
          sortType,
          sortOrder,
          currentPage,
        })
      : props.getPageDefaultItems(currentPage);
  }, [currentPage]);

  const chooseItemType = useCallback((e) => {
    const currentSelectedType = e.target.value;

    if (currentSelectedType === selectedType) {
      props.setItemType("");
      props.getPageDefaultItems(1);
    } else {
      props.setItemType(currentSelectedType);

      props.getSelectedItems({
        selectedType: currentSelectedType,
        sortType,
        sortOrder,
        currentPage: 1,
      });
    }
    props.setPage({ selected: 0 }); //simulate react-paginate component event. Needs to be after setItemType considering useEffect on currentPage
  });

  return (
    <>
      <Header totalPrice={totalPrice.toFixed(2)} />
      {currentPageItems.length > 0 && (
        <MainContainer>
          <Sorting
            getSelectedItems={props.getSelectedItems}
            setSortRule={props.setSortRule}
            setPage={props.setPage}
            selectedType={selectedType}
          />
          <ProductSectionWrapper>
            <MainTitle />
            <ItemTypes onClick={chooseItemType} selected={props.selectedType} />
            <List items={currentPageItems} addBasket={addBasket} />
            <ListPagination
              pageCount={pageCount}
              setPage={props.setPage}
              currentPage={props.currentPage}
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
  setSortRule,
  addBasket,
  reduceBasket,
};

const mapStateToProps = ({
  companiesResponse,
  itemsResponse,
  basketResponse,
}) => {
  const { companies } = companiesResponse;
  const {
    selectedType,
    sortType,
    sortOrder,
    pageCount,
    loading,
  } = itemsResponse;
  const { basket } = basketResponse;

  return {
    companies,
    loading,
    selectedType,
    sortType,
    sortOrder,
    pageCount,
    currentPage: currentPage(itemsResponse),
    currentPageItems: currentPageItems(itemsResponse),
    basket,
    totalPrice: totalPrice(basketResponse),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);
