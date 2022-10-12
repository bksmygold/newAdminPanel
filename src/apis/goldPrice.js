import axios from 'axios';
//==============================
export const getGoldPrice = () => {
  return axios.get('https://api.metalpriceapi.com/v1/latest?api_key=0195516a53f013dc41f49c4927b5719&base=XAU&currencies=INR')
};

