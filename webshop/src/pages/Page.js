import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import {
  getCompanies,
  getPageDefaultItems,
  getSelectedItems,
  setPage,
  setItemType,
  addBasket,
  reduceBasket,
} from "../actions";
import { List, Header, ItemType, Basket } from "../components";
import { totalPrice } from "../reducers/BasketReducer";
import { currentPage, currentPageItems } from "../reducers/ItemsReducer";
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
      return;
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
        <div style={styles.mainContainer}>
          <Basket />
          <div style={styles.productSectionWrapper}>
            <h4 style={styles.title}>Products</h4>
            <div style={styles.typeContainer}>
              <ItemType
                type="mug"
                selected={selectedType}
                onClick={(e) => {
                  chooseItemType(e);
                }}
              />
              <ItemType
                type="shirt"
                selected={selectedType}
                onClick={(e) => {
                  chooseItemType(e);
                }}
              />
            </div>

            <List
              items={currentPageItems}
              currentPage={currentPage}
              pageCount={pageCount}
              setPage={props.setPage}
              addBasket={addBasket}
            />
          </div>
          <Basket
            basket={basket}
            addBasket={addBasket}
            totalPrice={totalPrice.toFixed(2)}
            reduceBasket={reduceBasket}
          />
        </div>
      )}
    </>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "3vw",
  },
  productSectionWrapper: {
    width: "44%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "2%",
    marginRight: "2%",
  },

  title: {
    color: "#6F6F6F",
    margin: 0,
    fontFamily: "Open Sans",
    fontWeight: "normal",
    fontSize: "20px",
    letterSpacing: "0.25px",
  },

  typeContainer: {
    marginTop: "0.4rem",
    marginBottom: "0.4rem",
    display: "flex",
    flexDirection: "row",
  },
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
