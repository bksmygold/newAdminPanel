import axios from 'axios';
//==============================
export const getOffer = () => {
  return axios.post('/offer/list', {
    options: {
      populate: ['typeId']
    }
  });
};

export const getOfferById = (id) => {
  return axios.get(`/offer/${id}`);
};

export const postOffer = (offer) => {
  let formData = new FormData();
  let { name, type, typeId, value, valueType, image } = offer;

  formData.append('name', name);
  formData.append('type', type);
  formData.append('typeId', typeId);
  formData.append('value', value);
  formData.append('valueType', valueType);
    if (image instanceof File) {
  formData.append('image', image);
    }
  console.log('payload----->',formData);
  return axios.post('/offer/create', formData);
};

export const updateOffer = ({ data, id }) => {
  let formData = new FormData();
  let { name, type, typeId, value, valueType, image } = data;

  formData.append('name', name);
  formData.append('type', type);
  formData.append('typeId', typeId);
  formData.append('value', value);
  formData.append('valueType', valueType);
  if (image instanceof File) {
    formData.append('image', image);
  }
  return axios.patch(`/offer/${id}`, formData);
};

export const deleteOffer = (id) => {
  return axios.delete(`/offer/${id}`);
};
