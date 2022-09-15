import axios from "axios";
//==============================
export const getOrnament = () => {
  return axios.post("/ornament/list");
};

export const getOrnamentById = (id) => {
  return axios.get(`/ornament/${id}`);
};

export const postOrnament = (name) => {
  return axios.post("/ornament/create",name);
};

export const updateOrnament = ({ data,id}) => {
  return axios.patch(`/ornament/${id}`, data);
};

export const deletetOrnament = (id) => {
  return axios.delete(`/ornament/${id}`);
};