import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.31.217:3333',
});

export default api;
