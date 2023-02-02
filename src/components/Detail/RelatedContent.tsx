import { textRegex } from './../../utils/VaildText';
import { useNavigate } from 'react-router-dom';
import { Content, ContentDate, ContentThumbnail, ContentTitle } from './styles';

export default function RelatedContent({ item }: { item: any }) {
  const { title, thumbnails, publishTime, channelId } = item.snippet;

  const timestamp: any = { publishTime };
  const date: any = new Date(timestamp.publishTime.toString()).toLocaleString();

  const navigate = useNavigate();

  return (
    <>
      <Content>
        <ContentThumbnail>
          <img
            onClick={() => {
              navigate(`/${channelId}/${item.id.videoId}`, { state: { item } });
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
