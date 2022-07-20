import style from './Post.module.css';
import PropTypes from 'prop-types';
import {PostImg} from './PostImg/PostImg';
import {PostHeading} from './PostHeading/PostHeading';
import {PostRaiting} from './PostRaiting/PostRaiting';
import {PostTime} from './PostTime/PostTime';
import {BtnDelete} from './BtnDelete/BtnDelete';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <PostImg postAlt={title}/>
      <PostHeading postTitle={title} postAuthor={author}/>
      <PostRaiting ups={ups}/>
      <PostTime date={date}/>
      <BtnDelete label={'Кнопка для удаления поста'}/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
