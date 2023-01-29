import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    // 키 환경변수
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});
