import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://2218e4e4fd54.ngrok.io',
});

export default instance;