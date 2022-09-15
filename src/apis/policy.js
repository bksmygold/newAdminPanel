import axios from 'axios';
//==============================
export const getPolicy = () => {
  return axios.post('/policy/list');
};

export const getPolicyById = (id) => {
  return axios.get(`/policy/${id}`);
};

export const postPolicy = (data) => {
  return axios.post('/policy/create', data);
};

export const updatePolicy = ({ data, id }) => {
  return axios.patch(`/policy/${id}`, data);
};

export const deletePolicy = (id) => {
  return axios.delete(`/policy/${id}`);
};
