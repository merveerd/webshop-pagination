import {
  COMPANIES_START,
  PAGE_CHANGE_START,
  PAGE_CHANGE_SUCCESS,
} from "./types";

export const getCompanies = () => ({
  type: COMPANIES_START,
});

export const getPage = (currentPage) => {
  //getItems olabilir
  return {
    type: PAGE_CHANGE_START,
    payload: currentPage,
  };
};

export const setPage = (currentPage) => ({
  type: PAGE_CHANGE_SUCCESS,
  payload: currentPage,
});
