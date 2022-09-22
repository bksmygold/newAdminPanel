import axios from 'axios';
//==============================
export const getSlider = () => {
  return axios.post('/slider/list',{
    options:{
      populate:"typeId"
    }
  });
};

export const getSliderById = (id) => {
  return axios.get(`/slider/${id}`);
};

export const postSlider = (data) => {
  let formData = new FormData();
  let { name, type, typeId, image } = data;
  formData.append('name', name);
  formData.append('type', type);
  formData.append('typeId', typeId);

  if (image instanceof File) {
    formData.append('image', image);
  }

  return axios.post('/slider/create', formData);
};

export const updateSlider = ({ data, id }) => {
  let formData = new FormData();
  let { name, type, typeId, image } = data;
  formData.append('name', name);
  formData.append('type', type);
  formData.append('typeId', typeId);

  if (image instanceof File) {
    formData.append('image', image);
  }
  return axios.patch(`/slider/${id}`, formData);
};

export const deleteSlider = (id) => {
  return axios.delete(`/slider/${id}`);
};
