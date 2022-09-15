import axios from 'axios';
//==============================
export const getCut = () => {
  return axios.post('/cut/list');
};

export const getCutById = (id) => {
  return axios.get(`/cut/${id}`);
};

export const postCut = (data) => {
  return axios.post('/cut/create', data);
};

export const updateCut = ({ data, id }) => {
  return axios.patch(`/cut/${id}`, data);
};

export const deleteCut = (id) => {
  return axios.delete(`/cut/${id}`);
};
