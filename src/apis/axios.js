import axios from 'axios'
import { ADMIN_API } from 'src/constant'

axios.defaults.baseURL = ADMIN_API
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGE0MTIwNWI5NTdiNTZjNDA4NWNkNiIsImVtYWlsIjoiYWRldHBAYmFuaXlhLmNvbSIsImlhdCI6MTY2MTgzOTMwOSwiZXhwIjoyMjYxODM5MzA5fQ.W_3RTR5rJ88GGs1KDC1dnc2j0jo744h_5B3dnq0XG-A";
axios.interceptors.request.use((request) => {
  if (!token) return request;
  request.headers["Authorization"] = `Bearer ${token}`;
  return request;
});


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