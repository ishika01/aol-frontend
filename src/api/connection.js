import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://1fd02b7db0c7.ngrok.io',
});

export default instance;
