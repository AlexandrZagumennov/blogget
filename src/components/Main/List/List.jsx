import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    thumbnail: '',
    title: 'Title1',
    author: 'Nickname1',
    ups: 21,
    date: '2022-02-21T09:45:00.00Z',
  };

  return (
    <ul className={style.list}>
      <Post postData={postData}/>
    </ul>
  );
};
