import React from "react";
import { Search } from "./Search";

const Searchs = (props) => (
  <>
    <Search
      areaTitle="Brands"
      data={props.companies}
      currentChoice={props.brand}
      handleSearchSelection={props.handleBrandSearch}
    />
    <Search
      areaTitle="Tags"
      data={props.tags}
      currentChoice={props.tag}
      handleSearchSelection={props.handleTagSearch}
    />
  </>
);
export { Searchs };
