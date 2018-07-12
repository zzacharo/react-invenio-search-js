import axios from 'axios';

const http = axios.create({
    baseURL: 'https://videos.cern.ch/api/records',
});

export default http;
