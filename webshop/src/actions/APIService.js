import axios from "axios";
import { BASE_URL } from "./types";
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const requestCompanies = async () => {
  return await axiosInstance.get(`/companies`);
};

export const requestItems = async (currentPage) => {
  return await axiosInstance.get(`/items?_page=${currentPage}&_limit=16`);
};

export const requestSelectedItems = async ({ selectedType, currentPage }) => {
  console.log(selectedType, currentPage);
  //wasn't able to make with pagination
  return await axiosInstance.get(`/items?itemType=${selectedType}`);
};
