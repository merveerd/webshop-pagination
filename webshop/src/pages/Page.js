import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
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
`;

const SelectionSectionWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

const Page = (props) => {
  const {
    pageCount,
    currentPage,
    currentPageItems,
    selectedType,
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
    selectedType || sortType || brand || tag
      ? props.getSelectedItems({
          selectedType,
          sortType,
          sortOrder,
          currentPage,
          brand,
          tag,
        })
      : props.getPageDefaultItems(currentPage); //can be in reducer with createSelector
  }, [currentPage]);

  //higher order function yap
  const chooseItemType = (e) => {
    const selected = e.target.value;

    if (selected === selectedType) {
      props.setItemType("");
      props.getPageDefaultItems(1);
    } else {
      props.setItemType(selected);

      props.getSelectedItems({
        selectedType: selected,
        sortType,
        sortOrder,
        brand,
        tag,
        currentPage: 1,
      });
    }
    props.setPage({ selected: 0 }); //simulate react-paginate component event. Needs to be after setItemType considering useEffect on currentPage
  };

  const handleBrandSearch = (e) => {
    const selected = e.target.value;

    if (selected === brand) {
      props.setBrand("");
      props.getPageDefaultItems(1);
    } else {
      props.setBrand(selected);

      props.getSelectedItems({
        selectedType,
        sortType,
        sortOrder,
        brand: selected,
        tag,
        currentPage: 1,
      });
    }
    props.setPage({ selected: 0 });
  };

  const handleTagSearch = (e) => {
    const selected = e.target.value;

    if (selected === tag) {
      props.setTag("");
      props.getPageDefaultItems(1);
    } else {
      props.setTag(selected);

      props.getSelectedItems({
        selectedType,
        sortType,
        sortOrder,
        brand,
        tag: selected,
        currentPage: 1,
      });
    }
    props.setPage({ selected: 0 });
  };

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
            selectedType={selectedType}
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
          />
        </SelectionSectionWrapper>
        {currentPageItems.length > 0 ? (
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
    selectedType,
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
    selectedType,
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
