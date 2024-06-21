import axios from "axios";

const api = axios.create({
    baseURL: "url da api",
});

export default api;