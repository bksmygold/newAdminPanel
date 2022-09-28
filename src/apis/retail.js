import axios from 'axios';
//==============================
export const getRetail = () => {
  return axios.post('/business/list');
};

export const getRetailById = (id) => {
  return axios.get(`/business/${id}`);
};

export const postRetail = (data) => {
  let formData = new FormData();
  let {

    name,
    email,
    mobile,
    aadhaar,
    pan,
    gstNo,
    businessType,
    image,

    bank,
  
    location,
  } = data
  formData.append("name", name)
  formData.append("email", email)
  formData.append("mobile", mobile)
  formData.append("aadhaar", aadhaar)
  formData.append("pan", pan)
  formData.append("gstNo", gstNo)
  formData.append("businessType", businessType)
  if(image instanceof File){

    formData.append("image", image)
  }
  formData.append("bank", JSON.stringify(bank))
  // formData.append("bankName", bankName)
  // formData.append("accountNo", accountNo)
  // formData.append("ifsc", ifsc)
  // formData.append("branch", branch)
  // formData.append("location", JSON.stringify(location.reverse()))

  return axios.post('/business/create', formData);
};

export const updateRetail = ({ data, id }) => {
  return axios.patch(`/business/${id}`, data);
};

export const deleteRetail = (id) => {
  return axios.delete(`/business/${id}`);
};
