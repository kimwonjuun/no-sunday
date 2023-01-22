import axios from 'axios';
// console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
// console.log(process.env.REACT_APP_NEWJEANS_API_KEY);

export const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    // newJeanskey: process.env.REACT_APP_NEWJEANS_API_KEY,
  },
});
