import style from './List.module.css';
import Post from './Post';
import Preloader from '../../UI/Preloader';
import {postRequestAsync} from '../../../store/post/postAction';
import {postSlice} from '../../../store/post/postSlice';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const posts = useSelector(state => state.posts.posts);
  // Фильтрация. Остаются посты только с уникальным id
  const uniqPosts = posts.filter((element, index, array) => array.findIndex(post => (post.data.id === element.data.id)) === index);

  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postSlice.actions.changePage(page));
    dispatch(postRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {uniqPosts ? uniqPosts.map((post) => (
          <Post key={post.data.id} postData={post.data} />
        )) : <Preloader size={200}/>}
        <li className={style.end} ref={endList}/>
      </ul>
      <Outlet/>
    </>
  );
};
