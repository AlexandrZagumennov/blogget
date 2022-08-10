import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsync} from './postAction';

const initialState = {
  posts: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
    },
  },
  extraReducers: {
    [postRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [postRequestAsync.fulfilled.type]: (state, action) => {
      // Разделение логики при наличии или отсутствуу after (бесконечный скролл)
      if (state.after && (action.payload.after !== state.after)) {
        if (action.payload) {
          state.posts = [...state.posts, ...action.payload.children];
        } else {
          state.posts;
        }
      } else {
        if (action.payload) {
          state.posts = action.payload.children;
        } else {
          state.posts;
        }
      }
      state.loading = false;
      state.error = '';

      if (action.payload) {
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
      } else {
        state.after;
        state.isLast;
      }
    },
    [postRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});

export default postSlice.reducer;
