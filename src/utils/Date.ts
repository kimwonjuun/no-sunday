import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

// 한국어로 표현
register('ko', koLocale);

// timeage 함수
// 포멧할 date, 별도로 전달하지 않으면 기본 lang = 'en_US' 전달
export function formatAgo(date: any, lang = 'en_US') {
  return format(date, lang);
}
