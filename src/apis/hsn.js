import axios from 'axios';
//==============================
export const getHsn = () => {
  return axios.post('/hsn/list');
};

export const getHsnById = (id) => {
  return axios.get(`/hsn/${id}`);
};

export const postHsn = (data) => {
  return axios.post('/hsn/create', data);
};

export const updateHsn = ({ data, id }) => {
  return axios.patch(`/hsn/${id}`, data);
};

export const deleteHsn = (id) => {
  return axios.delete(`/hsn/${id}`);
};
