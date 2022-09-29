import axios from 'axios';
//==============================
export const getGoldPrice = () => {
  return axios.get('https://metals-api.com/api/latest?access_key=v94uzsrz615gftylzqxh4ail9664qn3gqk8q02i04xn0oxa78je8py869t9g&base=INR&symbols=XAU');
};

