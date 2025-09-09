import axios from "axios";

export const axiosi = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000",
  // baseURL: "https://ms-traders-b.vercel.app/",
});
