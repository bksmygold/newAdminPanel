import axios from "axios";
//==============================
export const getMetalGroup = () => {
  return axios.post("/metalgroup/list", {
    options: {
      populate: ["metal", "unit"],
    },
  });
};

export const getMetalGroupById = (id) => {
  return axios.get(`/metalgroup/${id}`);
};

export const postMetalGroup = (data) => {
    console.log(data)
  return axios.post("/metalgroup/create", data);
};

export const updateMetalGroup = ({ data, id }) => {
  return axios.put(`/metalgroup/update/${id}`, data);
};

export const deleteMetalGroup = (id) => {
  return axios.delete(`/metalgroup/delete/${id}`);
};
