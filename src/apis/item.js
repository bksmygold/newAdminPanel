import axios from 'axios';
//==============================
export const getItem = () => {
  return axios.post('/item/list');
};

export const getItemById = (id) => {
  return axios.get(`/item/${id}`);
};

export const postItem = (data) => {
  let formData = new FormData();
  let { name, image } = data;
  formData.append('name', name);
  if (image instanceof File) {
    formData.append('image', image)
  }
  return axios.post('/item/create', formData);
};

export const updateItem = ({ data, id }) => {
  console.log("edited ---", data.name)
  let formData = new FormData();
  formData.append('name', data.name);
  if (data.image instanceof File) {
    formData.append('image', data.image)
  }
  return axios.patch(`/item/${id}`, formData);
};

export const deleteItem = (id) => {
  return axios.delete(`/item/${id}`);
};
