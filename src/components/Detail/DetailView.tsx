import { useEffect } from 'react';

import Comment from './Comment';
import RelatedContent from './RelatedContent';
import Youtube from './Youtube';
import { getSearchVideos } from 'redux/modules/MediaSlice';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import {
  ContentFrameView,
  ContentsView,
  ContentView,
  RelatedContentContainer,
  RelatedContentList,
  RelatedContentNumber,
  RelatedContentTitle,
} from './styles';

export default function DetailView() {
  const {
    state: { item },
  } = useLocation();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const payload = {
      channelId: item.snippet.channelId,
      orderType: 'viewCount',
      results: 15,
    };

    dispatch(getSearchVideos(payload));
  }, []);

  const { search } = useAppSelector((state) => state.media);

  return (
    <ContentFrameView>
      <ContentsView>
        <ContentView>
          <Youtube />
          <Comment videoId={item.id.videoId} />
        </ContentView>
        <RelatedContentContainer>
          <RelatedContentTitle>인기 미디어</RelatedContentTitle>
          <RelatedContentNumber>전체 20</RelatedContentNumber>
          <RelatedContentList>
            {search.map((item: any) => (
              <RelatedContent item={item} key={item.id.videoId} />
            ))}
          </RelatedContentList>
        </RelatedContentContainer>
      </ContentsView>
    </ContentFrameView>
  );
}
