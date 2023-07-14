import axios from "axios";


const urlBaseProduct = "https://appnative-backend.onrender.com";
const urlDev = "http://192.168.0.25:3004";

export const RequestsUser = {
    loungout: async () => await axios.get(`${urlDev}/api/logout`).then( res => res.data),
    
        
    

}