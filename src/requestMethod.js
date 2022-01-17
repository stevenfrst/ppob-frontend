import axios from "axios";

const BASE_URL = "https://api.stevenhoyo.co/v1/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.login;
const currentUser = user && JSON.parse(user).currentUser;
export const TOKEN = currentUser?.data?.token;

export const loginRequest = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "multipart/form-data" },
});

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
