import axios from "axios";
//==============================
export const getCyclePeriod = () => {
  return axios.post("/cycleperiod/list");
};

export const getCyclePeriodById = (id) => {
  return axios.get(`/cycleperiod/${id}`);
};

export const postCyclePeriod = (data) => {
  return axios.post("/cycleperiod/create", data);
};

export const updateCyclePeriod = ({ data, id }) => {
  return axios.put(`/cycleperiod/update/${id}`, data);
};

export const deleteCyclePeriod = (id) => {
  return axios.delete(`/cycleperiod/delete/${id}`);
};
