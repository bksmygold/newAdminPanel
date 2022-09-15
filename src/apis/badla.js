import axios from 'axios';
//==============================
export const getBadla = () => {
  return axios.post('/badla/list');
};

export const getBadlaById = (id) => {
  return axios.get(`/badla/${id}`);
};

export const postBadla = (data) => {
  return axios.post('/badla/create', data);
};

export const updateBadla = ({ data, id }) => {
  return axios.patch(`/badla/update/${id}`, data);
};

export const deleteBadla = (id) => {
  return axios.delete(`/badla/delete/${id}`);
};
