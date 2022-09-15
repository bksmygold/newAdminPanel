import axios from 'axios';
//==============================
export const getProductType = () => {
  return axios.post('/productType/list');
};

export const getProductTypeById = (id) => {
  return axios.get(`/productType/${id}`);
};

export const postProductType = (data) => {
  return axios.post('/productType/create', data);
};

export const updateProductType = ({ data, id }) => {
  return axios.patch(`/productType/${id}`, data);
};

export const deleteProductType = (id) => {
  return axios.delete(`/productType/${id}`);
};
