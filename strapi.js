// strapi.js
import axios from 'axios';
import {API_URL} from "./constants";

const strapi = axios.create({
    baseURL: `${API_URL}/api`
});

export default strapi;
