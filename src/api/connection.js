import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://9e3ffebbbfc0.ngrok.io',
});

export default instance;