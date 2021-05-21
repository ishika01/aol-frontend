import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://6c21a8d4d2aa.ngrok.io',
});

export default instance;