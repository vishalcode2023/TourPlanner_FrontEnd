import axios from "axios";

const instance = axios.create({
  baseURL: "https://tourplanner-backend.onrender.com", 
  withCredentials: true, 
});

export default instance;
