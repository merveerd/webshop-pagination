import {
  setPage,
  setItemType,
  setSortRule,
  setBrand,
  setTag,
  addBasket,
  reduceBasket,
} from "../actions/";

import {
  PAGE_CHANGE,
  SELECTED_TYPE_CHANGE,
  SORT_RULE_CHANGE,
  TAG_CHANGE,
  BRAND_CHANGE,
  BASKET_ADD,
  BASKET_REDUCE,
} from "../actions/types";

describe("ItemActions", () => {
  it("sets page according to pagination library event response", () => {
    const page = setPage({ selected: 2 });
    expect(page).toEqual({
      type: PAGE_CHANGE,
      payload: 3,
    });
  });

  it("sets item type for the product list", () => {
    const itemType = setItemType("mug");
    expect(itemType).toEqual({
      type: SELECTED_TYPE_CHANGE,
      payload: "mug",
    });
  });

  it("sets sort rule for the product list", () => {
    const sortRule = setSortRule({ sortType: "price", sortOrder: "asc" });
    expect(sortRule).toEqual({
      type: SORT_RULE_CHANGE,
      payload: { sortType: "price", sortOrder: "asc" },
    });
  });

  it("sets brand selection", () => {
    const brand = setBrand("Sipes Inc");
    expect(brand).toEqual({
      type: BRAND_CHANGE,
      payload: "Sipes Inc",
    });
  });
  it("sets tag selection", () => {
    const tag = setTag("Ocean");
    expect(tag).toEqual({
      type: TAG_CHANGE,
      payload: "Ocean",
    });
  });
});

describe("BasketActions", () => {
  it("reduces from basket", () => {
    const basket = reduceBasket({ price: "3.80", name: "Unbranded Mug" });
    expect(basket).toEqual({
      type: BASKET_REDUCE,
      payload: { price: "3.80", name: "Unbranded Mug" },
    });
  });

  it("adds to basket", () => {
    const basket = addBasket({ price: "3.80", name: "Unbranded Mug" });
    expect(basket).toEqual({
      type: BASKET_ADD,
      payload: { price: "3.80", name: "Unbranded Mug" },
    });
  });
});
