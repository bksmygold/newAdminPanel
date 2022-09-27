import axios from "axios";
//==============================
export const getTds = () => {
  return axios.post("/tds/list");
};

export const getTdsById = (id) => {
  return axios.get(`/tds/${id}`);
};

export const postTds = (data) => {
  return axios.post("/tds/create", data);
};

export const updateTds = ({ data, id }) => {
  return axios.patch(`/tds/${id}`, data);
};

export const deleteTds = (id) => {
  return axios.delete(`/tds/${id}`);
};
