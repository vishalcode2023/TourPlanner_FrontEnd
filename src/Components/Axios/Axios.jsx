import axios from "axios";

const instance = axios.create({
  baseURL: "https://tourplanner-backend-2.onrender.com", 
  withCredentials: true, 
});

export default instance;
