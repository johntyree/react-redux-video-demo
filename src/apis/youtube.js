import axios from 'axios';

const KEY = "AIzaSyDUQVUYbByIN1P_XwfIgjRo9GX0NHGy40E";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
});
