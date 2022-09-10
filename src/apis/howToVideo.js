import axios from "axios";
//=====================================================
export const getVideo =  () => {
  return  axios.post(`video/list`); // GET
};

export const getVideoById = (id) => {
  return axios.get(`video/${id}`); // GET
};

export const postVideo =  (HowTo) => {
  let formData = new FormData();
  let { title, language, category, video } = HowTo;
  formData.append("title", title);
  formData.append("language", language);
  formData.append("category", category);
  formData.append("video", video);
  return axios.post(`/video/create/`, formData);
};


export const updateVideo =  (data,id) => {
  let formData = new FormData();
  let { title, language, category, video } = data;
  formData.append("title", title);
  formData.append("language", language);
  formData.append("category", category);
  formData.append("video", video);
  return  axios.put(`/video/update/${id}`, formData); // PUT
};

export const deleteVideo =  (id) => {
  return axios.delete(`video/delete/${id}`); // DELETE
  
};
