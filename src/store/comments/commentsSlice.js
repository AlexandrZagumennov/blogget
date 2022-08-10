import {createSlice} from '@reduxjs/toolkit';
import {commentsRequestAsync} from './commentsAction';

const initialState = {
  comments: [],
  post: {},
  status: '',
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  // Это синхронные actions, в них переданы синхронные action creaters
  reducers: {
    commentsClose: (state) => {
      state.status = '';
      state.error = '';
      state.comments = [];
      state.post = {};
    },
  },
  // Это асинхронные actions, в них передаются асинхронные action creaters
  extraReducers: {
    [commentsRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    [commentsRequestAsync.fulfilled.type]: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
      state.status = 'loaded';
    },
    [commentsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  }
});

export default commentsSlice.reducer;
