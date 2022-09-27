import axios from 'axios';
//==============================
export const getDepartment = () => {
  return axios.post('/department/list');
};

export const getDepartmentById = (id) => {
  return axios.get(`/department/${id}`);
};

export const postDepartment = (data) => {
  return axios.post('/department/create', data);
};

export const updateDepartment = ({ data, id }) => {
  return axios.patch(`/department/${id}`, data);
};

export const deleteDepartment = (id) => {
  return axios.delete(`/department/${id}`);
};
