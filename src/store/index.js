import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer, tokenMiddleware} from './token/tokenReducer';
import {commentReducer} from './comment/commentReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postReducer} from './post/postReducer';
import {commentsReducer} from './comments/commentsReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  posts: postReducer,
  comments: commentsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk))
);
