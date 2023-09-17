// strapi.js
import axios from 'axios';

const strapi = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:1337/api'
});

export default strapi;
