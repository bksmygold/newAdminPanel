import axios from 'axios';
//==============================
export const getSubBids = () => {
  return axios.post('/subBids/list');
};

export const getSubBidsById = (id) => {
  return axios.get(`/subBids/${id}`);
};

export const postSubBids = (data) => {
  return axios.post('/subBids/create', data);
};

export const updateSubBids = ({ data, id }) => {
  return axios.patch(`/subBids/${id}`, data);
};

export const deleteSubBids = (id) => {
  return axios.delete(`/subBids/${id}`);
};
