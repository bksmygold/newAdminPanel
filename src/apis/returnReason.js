import axios from 'axios';
//==============================
export const getReturnReason = () => {
  return axios.post('/returnreason/list');
};

export const getReturnReasonById = (id) => {
  return axios.get(`/returnreason/${id}`);
};

export const postReturnReason = (data) => {
  return axios.post('/returnreason/create', data);
};

export const updateReturnReason = ({ data, id }) => {
  return axios.patch(`/returnreason/${id}`, data);
};

export const deleteReturnReason = (id) => {
  return axios.delete(`/returnreason/${id}`);
};
