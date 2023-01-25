import styled from 'styled-components';
import { textRegex } from './../../utils/VaildText';
import { useNavigate } from 'react-router-dom';

export default function RelatedContent({ item }: { item: any }) {
  const { title, thumbnails, publishTime } = item.snippet;

  const timestamp: any = { publishTime };
  const date: any = new Date(timestamp.publishTime.toString()).toLocaleString();

  const navigate = useNavigate();

  return (
    <>
      <Content>
        <ContentThumbnail>
          <img
            onClick={() => {
              navigate(`/arist/${item.id.playlistId}`, { state: { item } });
            }}
            src={thumbnails.high.url}
            alt={title}
          />
        </ContentThumbnail>
        <ContentTitle>{textRegex(title)}</ContentTitle>
        <ContentDate>{date}</ContentDate>
      </Content>
    </>
  );
}

const Content = styled.div``;

const ContentThumbnail = styled.div`
  aspect-ratio: 320/180;
  border-radius: 14px;
  isolation: isolate;
  overflow: hidden;
  position: relative;
`;

const ContentTitle = styled.div`
  color: #eee;
  display: -webkit-box;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  margin-top: 15px;
`;

const ContentSummary = styled.div`
  color: #aaa;
  display: block;
  font-size: 12px;
  line-height: 16px;
  margin-top: 4px;
`;

const ContentDate = styled.div`
  align-items: center;
  color: #8e8e8e;
  display: flex;
  font-size: 11px;
  line-height: 13px;
  align-items: center;
  display: flex;
  margin-top: 6px;
`;
