import styled from 'styled-components';
import { TwitterShareButton } from 'react-share';
import { BsTwitter } from 'react-icons/bs';
import { RiKakaoTalkFill } from 'react-icons/ri';

export default function Social() {
  const currentUrl = window.location.href;

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '심장이 뛰는 시간 Bounce 💗',
        description: '바운스에서 아이돌을 응원해보세요!',
        imageUrl:
          'https://lh3.googleusercontent.com/fife/AMPSemcBiyS3uIPZJP3eYgttDBqhUUy3yZg7Lc3CpqNcMxzazne7zEM0w6ddCWgfceXiGaVjFXH1qWFoaGPqy2HDEI89F8M8fnVbGbC0IbzSOTvIKtzsxLMhRNknaDRo5pavP-GahgHsG-005hKYgTIgVDTfJ0Kn7f4CkcKVPqd7z65b6HGwOgykJQuwDR92xOOgYDZfsmg_CdK7yQnhlK3W5KxpEPISgxli_zTkmhf1p4xE-NWYhq7I5uHxfzjs7iLfadyndogSkjRQ6CJZwAWgQGOzljrPWOvFTtVRM5-qCGj6upTwIuJju4k9-H8ulyzBO93l5nVGFS1xOWrHqPBan7GxStp7hyCdKVVqbo9Ypte1AXK0Z7zwAQlCUevgUnj1OtJ7M79b6Oo2z46Bs3NCQhvIa5MVjvSeFpeyCi6AVUC5jaEpYzdIu9RCkgnuBjO0uOLWz_16iAkih0ZXqjUqmY7R_3ZZfuQqbMdSLJHRd0dupmkDWHRPUfC6o2KEbpCym4O0-8UDzoFNy1vtT7_AI83gRYfSD1NKCZgdC1XT4jQ0DtX7I7halGVzib5MmoIGoeZaHTDjuxpck5aRh_lgHlf0yrZt5EL2FIxpjPAJbGBLbLGOYynF05wB6ATkSHHThJWQ6p3Z2CQXVWY8xt_6XO-KejqK9wp06gQfobbmHevzO7HO_cbgL3Yn8AMgZOoY5ZQG2WW3i7BJ2qtlUSt4yNboIMQrbpgjMuGe7nUTMzpA4CgOKZv8KTdhIseE7I2GNV1gzyPAEJbNhtr-07RPwWMDFehwq0OemBp7GvrVDinWWTzhnsXOglh7vuVZ83RNBvZN_F_Ql0Jd3wetoCU3vjbq1abR1oh8XwhOfb5K6M0j5MzgsnPiB7Znf0_PWXQknZHEOCUAI7LTd2bSq-VUEeuEVMFHaaCXKwOKEIDyZocbafXc6YnaldPWQh_QA0Np157ffQTsGYQn0hljmi8hCIwF17nfkZXCvn63pKlhgGJ3VR93WKzn9JaFsbkRtZYvc6n0AENOfQm2WPg5jBcjzWQVwKkm-c36nqieU1DBHK_B1PWxjjRTbcvKEHz8qtuK9niUYWacmDfS40DcBW6vjoBrNdqGKJdUc3R2_gTaM33x9tzCMNrXRgXJp4BzMGH3Hzi2-FRJ9Yey6I7ylkOdQehcMpMtvWvJCX7sOrD7hEEvusi45iT2DBvk7y_Z5VNnZMPWEctw69rktNyJGPRZaqFO6RjYqP36twDEVruCHXM3BOe-L0DrbDofliqoQJenkRghSzo2GaWlwzmtwLGErvZPRZNWCMoJU1zf08qWWed0FigzFvQf6mebFFDwa7VbEuMgfBDIgdVgIIyuIWe8T_jCIHSEm-JF28RW6iB5NKnPY_o7dqnjZCkzdHY5p6wJP7d1DDvxG9HQ1XUYo-nBoO_SCJJOzilule8OYWqqXTWZoUJFk7WwZWxgLqUcj9qQI2mkHteYX_A6hbY93GaFEGJxJH-vpeyUUmrQBXmTwsaqR_Qs7BQxgx3c=w2940-h1510',
        link: {
          mobileWebUrl: 'https://no-sunday.vercel.app/',
          webUrl: 'https://no-sunday.vercel.app/',
        },
      },
    });

    console.log(window.location.href);
  };

  return (
    <>
      <DropdownOption>
        <TwitterShareButton url={currentUrl}>
          <Wrapping>
            <TwitterShare />
            <SharePh>트위터로 공유하기</SharePh>
          </Wrapping>
        </TwitterShareButton>
        <KakaoShareButton onClick={shareKakao}>
          <Wrapping>
            <KakaoShare />
            <SharePh>카카오톡으로 공유하기</SharePh>
          </Wrapping>
        </KakaoShareButton>
      </DropdownOption>
    </>
  );
}

const DropdownOption = styled.div`
  position: absolute;
  z-index: 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #f9f9f9;
  min-width: 200px;
  border-radius: 8px;
  padding: 15px;
  top: 25px;
  right: 5px;
`;

const KakaoShareButton = styled.button`
  all: unset;
`;

const TwitterShare = styled(BsTwitter)`
  margin-right: 5px;
  size: 15px;
`;

const KakaoShare = styled(RiKakaoTalkFill)`
  margin-right: 5px;
  size: 15px;
`;

const Wrapping = styled.div`
  align-items: center;
  display: flex;
`;

const SharePh = styled.div`
  font-size: 15px;
  font-weight: 500;
`;
