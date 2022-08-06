import style from './List.module.css';
import Post from './Post';
import Preloader from '../../UI/Preloader';
import {usePost} from '../../../hooks/usePost';

export const List = () => {
  const [posts] = usePost();

  return (
    <ul className={style.list}>
      {Array.isArray(posts) ? posts.map((post) => (
        <Post key={post.data.id} postData={post.data} />
      )) : <Preloader size={200}/>}
    </ul>
  );
};
