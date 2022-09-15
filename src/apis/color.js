import axios from 'axios';
//==============================
export const getColor = () => {
  return axios.post('/colour/list');
};

export const getColorById = (id) => {
  return axios.get(`/colour/${id}`);
};

export const postColor = (data) => {
  return axios.post('/colour/create', data);
};

export const updateColor = ({ data, id }) => {
  return axios.patch(`/colour/${id}`, data);
};

export const deleteColor = (id) => {
  return axios.delete(`/colour/${id}`);
};
