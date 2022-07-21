import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 21,
      date: '2022-02-21T09:45:00.00Z',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 22,
      date: '2022-02-21T09:45:00.00Z',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 23,
      date: '2022-02-21T09:45:00.00Z',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 24,
      date: '2022-02-21T09:45:00.00Z',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData, index) => (
        <Post key={index} postData={postData}/>
      ))}
    </ul>
  );
};
