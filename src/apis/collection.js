import axios from 'axios';
//==============================
export const getCollection = () => {
  return axios.post('/collection/list');
};

export const getCollectionById = (id) => {
  return axios.get(`/collection/${id}`);
};

export const postCollection = (data) => {
  return axios.post('/collection/create', data);
};

export const updateCollection = ({ data, id }) => {
  return axios.patch(`/collection/${id}`, data);
};

export const deleteCollection = (id) => {
  return axios.delete(`/collection/${id}`);
};
