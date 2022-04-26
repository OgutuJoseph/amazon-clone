import axios from 'axios';

const instance = axios.create({
    // The API (Cloud Function) URL
    baseURL: 'http://localhost:5001/clone-5f4bd/us-central1/api' 
});

export default instance;