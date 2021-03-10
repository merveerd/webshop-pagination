import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCompanies, getPageItems, setPage, setBasket } from "../actions";
import { Loading, List, Header, ItemType } from "../components";
const Page = (props) => {
  const { currentPage } = props;

  useEffect(() => {
    props.getCompanies();
    props.getPageItems(1);
  }, []);

  useEffect(() => {
    //Tersi bir logic olabilir data çekilip sonra page değiştirilir?
    props.getPageItems(currentPage);
  }, [currentPage]);

  return (
    <div>
      <Header />
      {props.items.length > 0 && (
        <div style={styles.mainContainer}>
          <List
            items={props.items}
            currentPage={currentPage}
            setPage={props.setPage}
            setBasket={props.setBasket}
          />
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
};

const mapDispatchToProps = {
  getCompanies,
  setPage,
  getPageItems,
  setBasket,
};

const mapStateToProps = ({
  companiesResponse,
  itemsResponse,
  pageResponse,
}) => {
  const { companies } = companiesResponse;
  const { items, loading } = itemsResponse;
  const { currentPage } = pageResponse;

  return { companies, items, loading, currentPage };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);
