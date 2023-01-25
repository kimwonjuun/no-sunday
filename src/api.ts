import axios from 'axios';
// console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

export const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
<<<<<<< Updated upstream
    key: 'AIzaSyD79zpSL8ngB3-xRtASNN8eYNV-GjELUjI',
    // 원준님 키
    // key: 'AIzaSyBg_6kb8jCXeEsFpT0X3m9qkoW4s9Dzl3Y',
    // 유정님 키
    // key: 'AIzaSyCBDEEW6FlMFSngjrSRM4H56y1fMYX6y9M',
    // 진양님 키
    // key: 'AIzaSyDtU_PEu_8kJk4zoY_AuflBPiiYx5BtZZw',
=======
    // key: 'AIzaSyBg_6kb8jCXeEsFpT0X3m9qkoW4s9Dzl3Y', // 김원준 key
    key: 'AIzaSyCU6tOYP8q0b4SxUfo-vlH-E3P0bGYRo4U', // 김원준 key2
    // key: 'AIzaSyCBDEEW6FlMFSngjrSRM4H56y1fMYX6y9M', // 유정님 key
    // key: 'AIzaSyDtU_PEu_8kJk4zoY_AuflBPiiYx5BtZZw', // 진양님 key
>>>>>>> Stashed changes
    // 키 환경변수
    // key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});
