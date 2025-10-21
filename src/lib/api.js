import axios from "axios"
export const API_URL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;


const $api = axios.create({ 
    baseURL:API_URL,
    timeout:1000,
    withCredentials:true,
})


$api.interceptors.request.use((config)=>{
    if (!config.url.includes("/auth")){ 
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})



$api.interceptors.response.use((response)=>{ 
    return response;
}, async (error) =>{ 
    const OriginalRequest = error.config; 
    if (!error.config.url.includes("/auth") && error.response.status == 401 && !OriginalRequest._retry) {
        OriginalRequest._retry = true; 
        const response = await axios.post(API_URL+"/auth/refresh", {}, { withCredentials:true }); 
        localStorage.setItem("token", response.data.accessToken) 
        return $api(OriginalRequest);
    } 

    return Promise.reject(error)
     
})

export default $api;