import axios from "axios";

const instance = axios.create({
    baseURL: "https://sports-backend-4.onrender.com",
    
    
});

export default instance;