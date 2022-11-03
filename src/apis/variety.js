import axios from 'axios';
//==============================
export const getVariety = () => {
  return axios.post('/variety/list');
};

export const getVarietyById = (id) => {
  return axios.get(`/variety/${id}`);
};

export const postVariety = (data) => {
  const formData = new FormData()
  const {name , image} = data
  formData.append("name",name)
  if(image instanceof File){
    formData.append("image",image)
  }
  return axios.post('/variety/create', formData);
};

export const updateVariety = ({ data, id }) => {
  const formData = new FormData()
  formData.append("name",data.name)
  if(data.image instanceof File){
    formData.append("image",data.image)
  }
  return axios.patch(`/variety/${id}`, formData);
};

export const deleteVariety = (id) => {
  return axios.delete(`/variety/${id}`);
};
