import axios from "axios";

export const MiCampusApi = axios.create({
    baseURL: 'https://nest-institucion-educativa.onrender.com/api',
})