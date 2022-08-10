import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const postRequestAsync = createAsyncThunk(
  'post/fetch',
  (newPage, {getState}) => {
    let page = getState().posts.page;
    if (newPage) {
      page = newPage;
    }

    const token = getState().token.token;
    const after = getState().posts.after;
    const isLast = getState().posts.isLast;

    if (!token || isLast) return;

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`
        },
      })
      .then(({data}) => (data.data))
      .catch((error) => ({error: error.toString()}));
  },
);
