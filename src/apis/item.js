import axios from "axios";
//==============================
export const getItem = () => {
  return axios.post("/item/list");
};

export const getItemById = (id) => {
  return axios.get(`/item/${id}`);
};

export const postItem = (data) => {
  return axios.post("/item/create", data);
};

export const updateItem = ({ data, id }) => {
  return axios.put(`/item/update/${id}`, data);
};

export const deleteItem= (id) => {
  return axios.delete(`/item/delete/${id}`);
};
