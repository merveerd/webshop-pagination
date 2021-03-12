import axios from "axios";
import { BASE_URL } from "./types";
import { pageItemCount } from "../constants";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const requestCompanies = async () => {
  return await axiosInstance.get(`/companies`);
};

export const requestDefaultItems = async (currentPage) => {
  return await axiosInstance.get(
    `/items?_page=${currentPage}&_limit=${pageItemCount}`
  );
};

export const requestAllItems = async () => {
  return await axiosInstance.get(`/items`);
};

export const requestSelectedItems = async ({
  itemType,
  sortType, //price or added
  sortOrder,
  tag,
  brand,
  currentPage,
}) => {
  const isBrandChosen = Object.keys(brand).length !== 0;
  const isTagChosen = Object.keys(tag).length !== 0;

  if (itemType && sortType && isTagChosen && isBrandChosen) {
    return await axiosInstance.get(
      `/items?tags_like=${tag}&itemType=${itemType}&manufacturer=${brand}&_sort=${sortType}&_order=${sortOrder}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (itemType && sortType && isTagChosen) {
    return await axiosInstance.get(
      `/items?tags_like=${tag}&itemType=${itemType}&_sort=${sortType}&_order=${sortOrder}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (itemType && sortType && isBrandChosen) {
    return await axiosInstance.get(
      `/items?itemType=${itemType}&manufacturer=${brand}&_sort=${sortType}&_order=${sortOrder}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (sortType && isTagChosen && isBrandChosen) {
    return await axiosInstance.get(
      `/items?tags_like=${tag}&manufacturer=${brand}&_sort=${sortType}&_order=${sortOrder}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (itemType && isTagChosen && isBrandChosen) {
    return await axiosInstance.get(
      `/items?tags_like=${tag}&itemType=${itemType}&manufacturer=${brand}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (itemType && sortType) {
    return await axiosInstance.get(
      `/items?itemType=${itemType}&_sort=${sortType}&_order=${sortOrder}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (itemType && isTagChosen) {
    return await axiosInstance.get(
      `/items?tags_like=${tag}&itemType=${itemType}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (itemType && isBrandChosen) {
    return await axiosInstance.get(
      `/items?itemType=${itemType}&manufacturer=${brand}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (sortType && isTagChosen) {
    return await axiosInstance.get(
      `/items?tags_like=${tag}&_sort=${sortType}&_order=${sortOrder}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (sortType && isBrandChosen) {
    return await axiosInstance.get(
      `/items?manufacturer=${brand}&_sort=${sortType}&_order=${sortOrder}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (isTagChosen && isBrandChosen) {
    return await axiosInstance.get(
      `/items?tags_like=${tag}&manufacturer=${brand}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (sortType) {
    return await axiosInstance.get(
      `/items?_sort=${sortType}&_order=${sortOrder}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (itemType) {
    return await axiosInstance.get(
      `/items?itemType=${itemType}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (isTagChosen) {
    return await axiosInstance.get(
      `/items?tags_like=${tag}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  } else if (isBrandChosen) {
    return await axiosInstance.get(
      `/items?manufacturer=${brand}&_page=${currentPage}&_limit=${pageItemCount}`
    );
  }
};
