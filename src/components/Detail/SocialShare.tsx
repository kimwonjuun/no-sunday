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
