import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../constants";
import { Wrapper } from "../components/SharedStyledComponents";
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
const MainContainer = styled(Wrapper)`
  justify-content: center;
  flex-direction: row;
  margin-top: 2.5vw;
`;

const ProductSectionWrapper = styled(Wrapper)`
  width: 44%;
  flex-direction: column;
  margin-left: 1.5%;
  margin-right: 1.5%;
  @media only screen and ${device.xs} {
    width: 70%;
  }
`;

const SelectionSectionWrapper = styled(Wrapper)`
  width: 20%;
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

Page.propTypes = {
  companies: PropTypes.object,
  tags: PropTypes.object,
  loading: PropTypes.bool,
  itemType: PropTypes.string,
  sortType: PropTypes.string,
  sortOrder: PropTypes.string,
  brand: PropTypes.string,
  tag: PropTypes.string,
  pageCount: PropTypes.number,
  currentPage: PropTypes.number,
  currentPageItems: PropTypes.array,
  basket: PropTypes.array,
  totalPrice: PropTypes.number,
  getCompaniesandTags: PropTypes.func,
  getPageDefaultItems: PropTypes.func,
  getSelectedItems: PropTypes.func,
  setPage: PropTypes.func,
  setItemType: PropTypes.func,
  setSortRule: PropTypes.func,
  setBrand: PropTypes.func,
  setTag: PropTypes.func,
  addBasket: PropTypes.func,
  reduceBasket: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);
