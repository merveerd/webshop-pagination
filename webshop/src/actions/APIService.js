import axios from "axios";
import { BASE_URL } from "./types";
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const requestCompanies = async () => {
  return await axiosInstance.get(`/companies`);
};

export const requestDefaultItems = async (currentPage) => {
  return await axiosInstance.get(`/items?_page=${currentPage}&_limit=16`);
};

export const requestSelectedItems = async ({
  selectedType,
  sortType, //price or added
  sortOrder,
  currentPage,
}) => {
  if (selectedType && sortType) {
    return await axiosInstance.get(
      `/items?itemType=${selectedType}&_sort=${sortType}&_order=${sortOrder}&_page=${currentPage}&_limit=16`
    );
  } else if (sortType) {
    return await axiosInstance.get(
      `/items?_sort=${sortType}&_order=${sortOrder}&_page=${currentPage}&_limit=16`
    );
  } else if (selectedType) {
    return await axiosInstance.get(
      `/items?itemType=${selectedType}&_page=${currentPage}&_limit=16`
    );
  }
};
