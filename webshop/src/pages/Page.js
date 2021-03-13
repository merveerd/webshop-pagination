import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { device } from "../constants";
import {
  getCompaniesandTags,
  getPageDefaultItems,
  getSelectedItems,
  setPage,
  setSortRule,
  setBrand,
  setTag,
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
  Searchs,
  Loading,
} from "../components";
import { totalPrice } from "../reducers/BasketReducer";
import { currentPage, currentPageItems } from "../reducers/ItemsReducer";
import { ITEM_TYPE, BRAND, TAG } from "../constants";
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
  margin-left: 1.5%;
  margin-right: 1.5%;
  @media only screen and ${device.xs} {
    width: 70%;
  }
`;

const SelectionSectionWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  @media only screen and ${device.xs} {
  }
`;

const Page = (props) => {
  const {
    pageCount,
    currentPage,
    currentPageItems,
    itemType,
    sortType,
    sortOrder,
    brand,
    tag,
    basket,
    totalPrice,
    addBasket,
    reduceBasket,
    companies,
    tags,
  } = props;

  useEffect(() => {
    props.getCompaniesandTags();
    props.getPageDefaultItems(1);
  }, []);

  useEffect(() => {
    itemType || sortType || brand || tag
      ? props.getSelectedItems({
          itemType,
          sortType,
          sortOrder,
          currentPage,
          brand,
          tag,
        })
      : props.getPageDefaultItems(currentPage);
  }, [currentPage]);

  const handleSelection = (e, parameter, parameterName) => {
    const selected = e.target.value;
    const newParams = {
      itemType,
      sortType,
      sortOrder,
      brand,
      tag,
      currentPage: 1,
    };
    switch (parameterName) {
      case ITEM_TYPE:
        selected === parameter
          ? (newParams.itemType = "")
          : (newParams.itemType = selected);
        props.setItemType(newParams.itemType);
        break;
      case BRAND:
        selected === parameter
          ? (newParams.brand = "")
          : (newParams.brand = selected);
        props.setBrand(newParams.brand);
        break;
      case TAG:
        selected === parameter
          ? (newParams.tag = "")
          : (newParams.tag = selected);
        props.setTag(newParams.tag);
        break;
    }

    if (
      !newParams.itemType &&
      !newParams.sortType &&
      !newParams.brand &&
      !newParams.tag
    ) {
      props.getPageDefaultItems(1);
    } else {
      props.getSelectedItems(newParams);
    }

    props.setPage({ selected: 0 }); //simulate react-paginate component event. Needs to be after other set functions considering useEffect on currentPage
  };

  const chooseItemType = (e) => handleSelection(e, itemType, ITEM_TYPE);

  const handleBrandSearch = (e) => handleSelection(e, brand, BRAND);

  const handleTagSearch = (e) => handleSelection(e, tag, TAG);

  return (
    <>
      <Header totalPrice={totalPrice.toFixed(2)} />

      <MainContainer>
        <SelectionSectionWrapper>
          <Sorting
            getSelectedItems={props.getSelectedItems}
            getPageDefaultItems={props.getPageDefaultItems}
            setSortRule={props.setSortRule}
            setPage={props.setPage}
            itemType={itemType}
            brand={brand}
            tag={tag}
          />
          <Searchs
            handleBrandSearch={handleBrandSearch}
            handleTagSearch={handleTagSearch}
            tags={tags}
            companies={companies}
            brand={brand}
            tag={tag}
            itemType={itemType}
          />
        </SelectionSectionWrapper>
        {currentPageItems.length > 0 ? (
          <ProductSectionWrapper>
            <MainTitle />
            <ItemTypes onClick={chooseItemType} selected={props.itemType} />
            <List items={currentPageItems} addBasket={addBasket} />
            <ListPagination
              pageCount={pageCount}
              setPage={props.setPage}
              currentPage={props.currentPage}
            />
          </ProductSectionWrapper>
        ) : (
          <Loading></Loading>
        )}
        <Basket
          basket={basket}
          addBasket={addBasket}
          totalPrice={totalPrice.toFixed(2)}
          reduceBasket={reduceBasket}
        />
      </MainContainer>
    </>
  );
};

const mapDispatchToProps = {
  getCompaniesandTags,
  getPageDefaultItems,
  getSelectedItems,
  setPage,
  setItemType,
  setSortRule,
  setBrand,
  setTag,
  addBasket,
  reduceBasket,
};

const mapStateToProps = ({ searchResponse, itemsResponse, basketResponse }) => {
  const { companies, tags } = searchResponse;
  const {
    itemType,
    sortType,
    sortOrder,
    pageCount,
    loading,
    brand,
    tag,
  } = itemsResponse;
  const { basket } = basketResponse;

  return {
    companies,
    tags,
    loading,
    itemType,
    sortType,
    sortOrder,
    brand,
    tag,
    pageCount,
    currentPage: currentPage(itemsResponse),
    currentPageItems: currentPageItems(itemsResponse),
    basket,
    totalPrice: totalPrice(basketResponse),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);
