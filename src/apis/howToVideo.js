import axios from 'axios';
//=====================================================
export const getVideo = (filter) => {
  return axios.post(`/video/list`,{
    filter:{
      category:filter
    }
  }); // GET
};

export const getVideoById = (id) => {
  return axios.get(`/video/${id}`); // GET
};

export const postVideo = (HowTo) => {
  let formData = new FormData();
  let { title, language, category, video } = HowTo;
  formData.append('title', title);
  formData.append('language', language);
  formData.append('category', category);
  if (video instanceof File) {
    formData.append('video', video);
  }
  return axios.post(`/video/create/`, formData);
};

export const updateVideo = ({data, id}) => {
  let formData = new FormData();
  let { title, language, category, video } = data;
  formData.append('title', title);
  formData.append('language', language);
  formData.append('category', category);
  if (video instanceof File) {
    formData.append('video', video);
  }  return axios.patch(`/video/${id}`, formData); // PUT
};

export const deleteVideo = (id) => {
  return axios.delete(`/video/${id}`); // DELETE
};
