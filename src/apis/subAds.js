import axios from 'axios';
//==============================
export const getSubAds = () => {
  return axios.post('/subAds/list');
};

export const getSubAdsById = (id) => {
  return axios.get(`/subAds/${id}`);
};

export const postSubAds = (data) => {
  return axios.post('/subAds/create', data);
};

export const updateSubAds = ({ data, id }) => {
  return axios.patch(`/subAds/${id}`, data);
};

export const deleteSubAds = (id) => {
  return axios.delete(`/subAds/${id}`);
};
