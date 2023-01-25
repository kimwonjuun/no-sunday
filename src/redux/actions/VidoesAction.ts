import {
  MEDIA_VIDEOS_FAIL,
  MEDIA_VIDEOS_REQUEST,
  MEDIA_VIDEOS_SUCCESS,
} from '../ActionType';
import { request } from '../../api';

interface SystemError {
  code: string;
  message: string;
}

export const getSearchVideos = () => async (dispatch: any) => {
  try {
    dispatch({
      type: MEDIA_VIDEOS_REQUEST,
    });
    const { data } = await request('/search', {
      params: {
        part: 'snippet',
        channelId: 'UCMki_UkHb4qSc0qyEcOHHJw',
        // regionCode: 'KO',
        maxResults: 50,
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
