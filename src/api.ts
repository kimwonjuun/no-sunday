import axios from 'axios';
// console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
// console.log(process.env.REACT_APP_NEWJEANS_API_KEY);

export const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyDtU_PEu_8kJk4zoY_AuflBPiiYx5BtZZw',
    // 키 환경변수
    // key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});
