import { useEffect, useState } from 'react';
import { useAppDispatch } from './useRedux';
import { getSearchVideos } from './../redux/modules/MediaSlice';
import { useLocation } from 'react-router-dom';

export default function useLoading() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const dispatch = useAppDispatch();

  const channelId = location.pathname.substring(1);

  //finally 무조건 실행하는것
  useEffect(() => {
    setLoading(true);
    dispatch(getSearchVideos({ channelId })).finally(() => setLoading(false));
  }, [dispatch, channelId]);

  // 객체는 순서 필요없다.
  //  많은것을 사용할때는 객체를 사용하는것이 편하다.
  // 배열은 순서대로 사용해야 된다.
  return [loading];
}
