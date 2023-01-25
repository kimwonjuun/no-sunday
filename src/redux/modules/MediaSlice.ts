import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { request } from '../../utils/Api';

const initialState = {
  search: [],
  loading: false,
  error: null,
  nextPageToken: null,
};

interface VideoPayload {
  channelId: string;
  orderType?: string;
  results?: number;
}

export const getSearchVideos = createAsyncThunk(
  'getSearchVideos',
  async ({ channelId, orderType, results }: VideoPayload, thunkAPI) => {
    try {
      const { data } = await request('/search', {
        params: {
          part: 'snippet',
          channelId: channelId,
          order: orderType ?? 'date',
          maxResults: results ?? 50,
          pageToken: '',
          type: 'video',
        },
      });

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearchVideos.fulfilled, (state, { payload }) => {
      state.search = payload.items;
      state.nextPageToken = payload.nextPageToken;
    });
  },
});

export default mediaSlice.reducer;
