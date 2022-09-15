import axios from 'axios';
//==============================
export const getCategory = () => {
  return axios.post('/category/list');
};

export const getCategoryById = (id) => {
  return axios.get(`/category/${id}`);
};

export const postCategory = (data) => {
  return axios.post('/category/create', data);
};

export const updateCategory = ({ data, id }) => {
  return axios.patch(`/category/${id}`, data);
};

export const deleteCategory = (id) => {
  return axios.delete(`/category/${id}`);
};
