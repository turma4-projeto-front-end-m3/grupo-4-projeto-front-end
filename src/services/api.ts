import axios from "axios";

export const api = axios.create({
    baseURL: "https://fake-api-grupo-4-0.onrender.com/",
    timeout: 3500,
}) 
