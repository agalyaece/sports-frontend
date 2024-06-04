import axios from "axios";

const instance = axios.create({
    baseURL: "https://sports-backend-5.onrender.com",
    // baseURL:"http://localhost:3000"
    
});

export default instance;