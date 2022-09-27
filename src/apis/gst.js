import axios from 'axios';
//==============================
export const getGst = () => {
  return axios.post('/gst/list');
};

export const getGstById = (id) => {
  return axios.get(`/gst/${id}`);
};

export const postGst = (data) => {
  return axios.post('/gst/create', data);
};

export const updateGst = ({ data, id }) => {
  return axios.patch(`/gst/${id}`, data);
};

export const deleteGst = (id) => {
  return axios.delete(`/gst/${id}`);
};
