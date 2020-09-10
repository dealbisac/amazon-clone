import axios from 'axios';

const instance = axios.create({
    //Local API
    baseURL: 'http://localhost:5001/clone-5153f/us-central1/api'
    //the API (cloud function ) URL 
});

export default instance;