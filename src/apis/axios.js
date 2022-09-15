import axios from "axios";
import { ADMIN_API } from "src/constant";

axios.defaults.baseURL = ADMIN_API;
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTVhNTQ3NTU5MzEyNjE5ZGJhOTYzNSIsImlwIjoiOjoxIiwiaWF0IjoxNjYyMzYzMDc1LCJleHAiOjE2NjQ5NTUwNzUsImlzcyI6IkJLUyBNWSBHT0xEIn0.4AE_xDfp8fltNsCMq3VvDFAm6mTFwaf1NTRnPOj1gLY';
  axios.interceptors.request.use((request) => {
  if (!token) return request;
  request.headers["Authorization"] = `Bearer ${token}`;
  return request;
});

axios.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err);
    if (err.response) {
      return Promise.reject({
        message: err.response.message || err.response.statusText || "Unkown Error ",
        status: err.response.status,
        ...err.response.data,
      });
    } else if (err.request) {
      return Promise.reject({
        message: "Server is down, please try again later",
      });
    } else {
      return Promise.reject({
        message: err.message,
      });
    }
  }
);
