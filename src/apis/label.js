import axios from 'axios';
//==============================
export const getLabel = () => {
  return axios.post('/label/list');
};

export const getLabelById = (id) => {
  return axios.get(`/label/${id}`);
};

export const postLabel = (data) => {
  return axios.post('/label/create', data);
};

export const updateLabel = ({ data, id }) => {
  return axios.patch(`/label/${id}`, data);
};

export const deleteLabel = (id) => {
  return axios.delete(`/label/${id}`);
};
