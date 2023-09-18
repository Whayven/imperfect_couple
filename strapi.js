// strapi.js
import axios from 'axios';

const strapi = axios.create({
    baseURL: 'https://337a-99-76-171-10.ngrok.io/api'
});

export default strapi;
