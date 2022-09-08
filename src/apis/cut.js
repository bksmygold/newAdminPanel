import axios from "axios";
//==============================
export const getCut = () => {
  return axios.post("/cut/list");
};

export const getCutById = (id) => {
  return axios.get(`/cut/${id}`);
};

export const postCut = (data) => {
  return axios.post("/cut/create", data);
};

export const updateCut = ({ data, id }) => {
  return axios.put(`/cut/update/${id}`, data);
};

export const deleteCut = (id) => {
  return axios.delete(`/cut/delete/${id}`);
};
