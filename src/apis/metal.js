import axios from 'axios';
//==============================
export const getMetal = () => {
  return axios.post('/metal/list');
};
//==============================
export const getMetalById = (id) => {
  return axios.get(`/metal/${id}`);
};
//==============================
export const postMetal = (data) => {
  let formData = new FormData();
  let { name, icon } = data;
  formData.append('name', name);
  if (icon instanceof File) { 

    formData.append('icon', icon);
  }
  return axios.post('/metal/create', formData);
};
//==============================
export const updateMetal = (data, id) => {
  // let formData = new FormData();
  // let { name, icon } = data;
  // formData.append("name", name);
  // formData.append("icon", icon);
  return axios.patch(`/metal/${id}`, data);
};
//==============================
export const deleteMetal = (id) => {
  return axios.delete(`/metal/${id}`);
};
//==============================
