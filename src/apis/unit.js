import axios from "axios";
//==============================
export const getUnit = () => {
  return axios.post("/unit/list");
};

export const getUnitById = (id) => {
  return axios.get(`/unit/${id}`);
};

export const postUnit = (data) => {
  return axios.post("/unit/create", data);
};

export const updateUnit = ({ data, id }) => {
  return axios.patch(`/unit/${id}`, data);
};

export const deleteUnit = (id) => {
  return axios.delete(`/unit/${id}`);
};
