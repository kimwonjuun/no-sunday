import axios from 'axios';
// console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

export const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    // key: 'AIzaSyAioSXk_jWE6eQ7FGzW7Ym-OF6lSQNj1bA', // 준바운스1
    // key: 'AIzaSyAoQdtN0NJ0rEQf848gtFJ0rUJN4MWXaCs', // 다인님키
    key: 'AIzaSyAFrvyVNOlJvtd8DkJ8NyK1Zz9AbuoF8AU',
    // 김원준 키 2
    // key: 'AIzaSyD79zpSL8ngB3-xRtASNN8eYNV-GjELUjI', // 김원준 키1

    // key: 'AIzaSyBg_6kb8jCXeEsFpT0X3m9qkoW4s9Dzl3Y',
    // 유정님 키
    // key: 'AIzaSyCBDEEW6FlMFSngjrSRM4H56y1fMYX6y9M',
    // 진양님 키
    // key: 'AIzaSyDtU_PEu_8kJk4zoY_AuflBPiiYx5BtZZw',
    // 키 환경변수
    // key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});
