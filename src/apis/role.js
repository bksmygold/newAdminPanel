  import axios from 'axios';
//==============================
export const getRole = () => {
  return axios.post('/role/list');
};

export const getRoleById = (id) => {
  return axios.get(`/role/${id}`);
};

export const postRole = (data) => {
  return axios.post('/role/create', data);
};

export const updateRole = ({ data, id }) => {
  return axios.patch(`/role/${id}`, data);
};

export const deleteRole = (id) => {
  return axios.delete(`/role/${id}`);
};
