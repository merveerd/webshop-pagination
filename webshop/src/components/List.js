import React, { memo } from "react";
import { Product } from "./Product";
import ListPagination from "./ListPagination";
import styled from "styled-components";

const ListWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #fefefe;
`;
const List = memo((props) => {
  return (
    <ListWrapper>
      {props.items.map((item, index) => {
        return <Product item={item} key={index} addBasket={props.addBasket} />;
      })}

      <ListPagination
        pageCount={props.pageCount}
        setPage={props.setPage}
        currentPage={props.currentPage}
      />
    </ListWrapper>
  );
});

export { List };
