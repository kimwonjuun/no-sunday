import { TwitterShareButton } from 'react-share';
import {
  DropdownOption,
  Wrapping,
  TwitterShare,
  SharePh,
  KakaoShareButton,
  KakaoShare,
} from './styles';

export default function Social() {
  const currentUrl = window.location.href;

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '심장이 뛰는 시간 Bounce 💗',
        description: '바운스에서 아이돌을 응원해보세요!',
        imageUrl:
          'https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOTnDF0rUK-t7QqN0QCX_4C6jqcwiPJpEQtKAhWBRORVd3MPh9lEkboloDICKuAIqSTK7mIPCB5y6r-2emCs0nLnQUlH=w1874-h944',
        link: {
          mobileWebUrl: 'https://no-sunday.vercel.app/',
          webUrl: 'https://no-sunday.vercel.app/',
        },
      },
    });
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
