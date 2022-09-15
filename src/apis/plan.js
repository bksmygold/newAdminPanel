import axios from 'axios';
//==============================
export const getPlan = () => {
  return axios.post('/plan/list');
};

export const getPlanById = (id) => {
  return axios.get(`/plan/${id}`);
};

export const postPlan = (data) => {
  return axios.post('/plan/create', data);
};

export const updatePlan = ({ data, id }) => {
  return axios.patch(`/plan/update/${id}`, data);
};

export const deletePlan = (id) => {
  return axios.delete(`/plan/delete/${id}`);
};
