import {
  MEDIA_VIDEOS_FAIL,
  MEDIA_VIDEOS_REQUEST,
  MEDIA_VIDEOS_SUCCESS,
} from '../ActionType';
import { request } from '../../utils/Api';

interface SystemError {
  code: string;
  message: string;
}

export const getSearchVideos =
  (chennelId: any, a?: string, b?: number) => async (dispatch: any) => {
    try {
      dispatch({
        type: MEDIA_VIDEOS_REQUEST,
      });
      const { data } = await request('/search', {
        params: {
          part: 'snippet',
          // channelId: 'UCMki_UkHb4qSc0qyEcOHHJw',
          channelId: chennelId,
          order: a ?? 'date',
          maxResults: b ?? 50,
          pageToken: '',
          type: 'video',
        },
      });

      dispatch({
        type: MEDIA_VIDEOS_SUCCESS,
        payload: {
          // video: data.items,
          search: data.items,
          nextPageToken: data.nextPageToken,
        },
      });
    } catch (error) {
      const err = error as SystemError;
      if (err.code === 'ENOENT') {
        console.log('Someting wrong!');
      }
      dispatch({
        type: MEDIA_VIDEOS_FAIL,
        payload: error,
      });
    }
  };
