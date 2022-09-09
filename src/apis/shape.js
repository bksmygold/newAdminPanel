import axios from "axios";
//==============================
export const getShape = () => {
  return axios.post("/shape/list");
};

export const getShapeById = (id) => {
  return axios.get(`/shape/${id}`);
};

export const postShape = (data) => {
  return axios.post("/shape/create", data);
};

export const updateShape = ({ data, id }) => {
  return axios.put(`/shape/update/${id}`, data);
};

export const deleteShape = (id) => {
  return axios.delete(`/shape/delete/${id}`);
};
