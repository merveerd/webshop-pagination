import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getCompanies,
  getPageItems,
  getSelectedItems,
  setPage,
  setBasket,
} from "../actions";
import { List, Header, ItemType } from "../components";
const Page = (props) => {
  const { currentPage, selectedItems, allItems } = props;
  const [currentSelectedType, setCurrentSelectedType] = useState("");
  const [currentPageItems, setCurrentPageItems] = useState([]);
  useEffect(() => {
    props.getCompanies();
    props.getPageItems(1);
  }, []);

  useEffect(() => {
    if (selectedItems[0]) {
      selectedItems[0].itemType === "mug"
        ? setCurrentSelectedType("mug")
        : setCurrentSelectedType("shirt");

      const pageItems = selectedItems.slice(
        (currentPage - 1) * 16,
        currentPage * 16
      );
      setCurrentPageItems(pageItems);
    }
  }, [selectedItems]);

  useEffect(() => {
    //data yüklenemezse data yüklenemedi uyarısı ver ekranda
    if (currentSelectedType) {
      props.getSelectedItems({
        selectedType: currentSelectedType,
        currentPage,
      });
      return;
    }
    props.getPageItems(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPageItems(allItems);
  }, [allItems]);

  const chooseItemType = (e) => {
    const selectedType = e.target.value;
    if (currentSelectedType === selectedType) {
      setCurrentSelectedType("");
      props.getPageItems(1);
      //1. sayfaya clicklemiş gibi olmalı altta da.
      return;
    }
    props.getSelectedItems({ selectedType, currentPage: 1 });
  };

  return (
    <div>
      <Header />
      {allItems.length > 0 && (
        <div style={styles.mainContainer}>
          <div style={styles.productSectionWrapper}>
            <div style={styles.typeContainer}>
              <ItemType
                type="mug"
                selected={currentSelectedType}
                onClick={(e) => {
                  chooseItemType(e);
                }}
              />
              <ItemType
                type="shirt"
                selected={currentSelectedType}
                onClick={(e) => {
                  chooseItemType(e);
                }}
              />
            </div>

            <List
              items={currentPageItems}
              currentPage={currentPage}
              setPage={props.setPage}
              setBasket={props.setBasket}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  productSectionWrapper: {
    width: "45%",
    display: "flex",
    flexDirection: "column",
    marginTop: "5vw",

    // padding: "20px",
  },

  typeContainer: {
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
    display: "flex",
    flexDirection: "row",
  },
};

const mapDispatchToProps = {
  getCompanies,
  setPage,
  getPageItems,
  getSelectedItems,
  setBasket,
};

const mapStateToProps = ({
  companiesResponse,
  itemsResponse,
  pageResponse,
}) => {
  const { companies } = companiesResponse;
  const { allItems, selectedItems, loading } = itemsResponse;
  const { currentPage } = pageResponse;

  return { companies, allItems, selectedItems, loading, currentPage };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);
