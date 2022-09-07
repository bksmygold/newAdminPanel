import axios from 'axios'
//==============================
export const getMetal = () => { 
    return axios.post("/metal/list");
}