import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://ecf2b172689b.ngrok.io',
});

export default instance;