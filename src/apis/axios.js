import axios from 'axios'
import { ADMIN_API } from 'src/constant'

axios.defaults.baseURL = ADMIN_API


axios.interceptors.response.use(res => res.data, err => { 
    if (err.response) {
        return Promise.reject({
            message: err.response.message || err.response.statusText || "Nahi mila",
            status: err.response.status,
            ...err.response.data
        })
    } else if (err.request) {
        return Promise.reject({
            message: "Server is down, please try again later"
        })
    } else { 
        return Promise.reject({
            message: err.message,
        });
        
    }
    console.log(err)
})