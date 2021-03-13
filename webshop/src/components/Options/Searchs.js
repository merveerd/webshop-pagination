import React from "react";
import { Search } from "./Search";

const Searchs = (props) => (
  <>
    <Search
      areaTitle="Brands"
      placeholder=" Search Brands"
      data={props.companies}
      currentChoice={props.brand}
      handleSearchSelection={props.handleBrandSearch}
      showCount={!props.itemType && !props.tag}
    />
    <Search
      areaTitle="Tags"
      placeholder=" Search Tags"
      data={props.tags}
      currentChoice={props.tag}
      handleSearchSelection={props.handleTagSearch}
      showCount={!props.itemType && !props.brand}
    />
  </>
);
export { Searchs };
