import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCompanies, getPageItems, setPage, setBasket } from "../actions";
import { Loading, List } from "../components";
import "../style/Pagination.css";
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
      <Loading loading={props.loading} />
      {props.items.length > 0 && (
        <List
          items={props.items}
          currentPage={currentPage}
          setPage={props.setPage}
          setBasket={props.setBasket}
        />
      )}
    </div>
  );
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
