export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

// 한글 여부 확인 정규식
export const krRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

// 단어 소문자 + 공백제거하는 함수
export const trimmingKeyword = (keyword: string) =>
  keyword.toLowerCase().replace(/ /g, '');
