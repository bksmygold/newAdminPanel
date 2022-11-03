import axios from 'axios';
//==============================
export const getProductType = () => {
  return axios.post('/productType/list');
};

export const getProductTypeById = (id) => {
  return axios.get(`/productType/${id}`);
};

export const postProductType = (data) => {
  const formData = new FormData()
  const {name , image} = data
  formData.append("name",name)
  if(image instanceof File){
    formData.append("image",image)
  }
  return axios.post('/productType/create', formData);
};

export const updateProductType = ({ data, id }) => {
  const formData = new FormData()
  formData.append("name",data.name)
  if(data.image instanceof File){
    formData.append("image",data.image)
  }
  return axios.patch(`/productType/${id}`, formData);
};

export const deleteProductType = (id) => {
  return axios.delete(`/productType/${id}`);
};
