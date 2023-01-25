// title에 특수문자와 숫자를 ""으로 바꿔주는 함수
// /gi를 붙어주면 replaceAll 과 같은 결과를 볼 수 있다.

export function textRegex(title: any) {
  return title.replace(/&#39;/gi, '"').replace(/&quot;/gi, '"');
}
