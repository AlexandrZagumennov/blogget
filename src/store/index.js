import {tokenReducer, tokenMiddleware} from './token/tokenReducer';
import {commentReducer} from './comment/commentReducer';
import {authReducer} from './auth/authReducer';
import {postReducer} from './post/postReducer';
import commentsReducer from './comments/commentsSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    posts: postReducer,
    comments: commentsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
