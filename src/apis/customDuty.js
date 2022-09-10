import axios from "axios";
//==============================
export const getCustomDuty= () => {
  return axios.post("/customduty/list");
};

export const getCustomDutyById = (id) => {
  return axios.get(`/customduty/${id}`);
};

export const postCustomDuty = (data) => {
  return axios.post("/customduty/create", data);
};

export const updateCustomDuty = ({ data, id }) => {
  return axios.put(`/customduty/update/${id}`, data);
};

export const deleteCustomDuty = (id) => {
  return axios.delete(`/customduty/delete/${id}`);
};
