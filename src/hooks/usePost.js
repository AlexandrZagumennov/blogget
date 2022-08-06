import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postRequestAsync} from '../store/post/postAction';

export const usePost = () => {
  const posts = useSelector(state => state.post.data);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]);

  return [posts];
};
