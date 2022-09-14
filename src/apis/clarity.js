import axios from "axios";
//==============================
export const getClarity = () => {
  return axios.post("/clarity/list");
};

export const getClarityById = (id) => {
  return axios.get(`/clarity/${id}`);
};

export const postClarity = (data) => {
  return axios.post("/clarity/create", data);
};

export const updateClarity = ({ data, id }) => {
  return axios.patch(`/clarity/${id}`, data);
};

export const deleteClarity = (id) => {
  return axios.delete(`/clarity/${id}`);
};
