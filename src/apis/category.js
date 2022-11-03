import axios from 'axios';
//==============================
export const getCategory = () => {
  return axios.post('/category/list');
};

export const getCategoryById = (id) => {
  return axios.get(`/category/${id}`);
};

export const postCategory = (data) => {
  const formData = new FormData()
  const {name , image} = data
  formData.append("name",name)
  if(image instanceof File){
    formData.append("image",image)
  }
  return axios.post('/category/create', formData);
};

export const updateCategory = ({ data, id }) => {
  const formData = new FormData()
  formData.append("name",data.name)
  if(data.image instanceof File){
    formData.append("image",data.image)
  }
  return axios.patch(`/category/${id}`, formData);
};

export const deleteCategory = (id) => {
  return axios.delete(`/category/${id}`);
};
