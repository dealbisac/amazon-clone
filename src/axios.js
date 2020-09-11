import axios from 'axios';

const instance = axios.create({
    //Local API
    baseURL: 'http://localhost:5001/clone-5153f/us-central1/api'
    //the API (cloud function ) URL 
    //use the URL of the cloud functions url once setup 
});

export default instance;