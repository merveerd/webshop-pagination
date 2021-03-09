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
