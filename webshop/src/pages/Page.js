import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCompanies, getPage, setPage } from "../actions";
import { Loading, List } from "../components";
import "../style/Pagination.css";
const Page = (props) => {
  const { currentPage } = props;

  useEffect(() => {
    props.getCompanies();
    props.getPage(1);
  }, []);

  useEffect(() => {
    props.getPage(currentPage);
  }, [currentPage]);

  return (
    <div>
      <Loading loading={props.loading} />
      {props.items.length > 0 && (
        <List
          items={props.items}
          currentPage={currentPage}
          setPage={props.setPage}
        />
      )}
    </div>
  );
};
const mapDispatchToProps = {
  getCompanies,
  setPage,
  getPage,
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
