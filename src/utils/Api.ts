import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    // 키 환경변수
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});

export const shareThumbnailImage =
  'https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOTnDF0rUK-t7QqN0QCX_4C6jqcwiPJpEQtKAhWBRORVd3MPh9lEkboloDICKuAIqSTK7mIPCB5y6r-2emCs0nLnQUlH=w1874-h944';
export const shareThumbnailLink = 'https://no-sunday.vercel.app/';
