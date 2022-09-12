import axios from "axios";
//==============================
export const getSupplier = () => {
  return axios.post("/supplier/list");
};

export const getSupplierById = (id) => {
  return axios.get(`/supplier/${id}`);
};

export const postSupplier = (data) => {
  return axios.post("/supplier/create", data);
};

export const updateSupplier = ({ data, id }) => {
  return axios.put(`/supplier/update/${id}`, data);
};

export const deleteSupplier = (id) => {
  return axios.delete(`/supplier/delete/${id}`);
};
