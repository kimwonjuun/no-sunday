import {
  MEDIA_VIDEOS_FAIL,
  MEDIA_VIDEOS_SUCCESS,
  MEDIA_VIDEOS_REQUEST,
} from '../ActionType';

export const MediaVideos = (
  state = {
    search: [],
    loading: false,
    nextPageToken: null,
  },
  action: any,
) => {
  const { type, payload } = action;

  switch (type) {
    case MEDIA_VIDEOS_SUCCESS:
      return {
        ...state,
        search: payload.search,
        loading: false,
        nextPageToken: payload.nextPageToken,
      };

    case MEDIA_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case MEDIA_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
