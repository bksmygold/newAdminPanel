import axios from "axios";
//==============================
export const getVariety = () => {
  return axios.post("/variety/list");
};

export const getVarietyById = (id) => {
  return axios.get(`/variety/${id}`);
};

export const postVariety = (data) => {
  return axios.post("/variety/create", data);
};

export const updateVariety = ({ data, id }) => {
  return axios.put(`/variety/update/${id}`, data);
};

export const deleteVariety= (id) => {
  return axios.delete(`/variety/delete/${id}`);
};
