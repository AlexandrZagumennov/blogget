import style from './Post.module.css';
import PropTypes from 'prop-types';
import {PostImg} from './PostImg/PostImg';
import {PostHeading} from './PostHeading/PostHeading';
import {PostRaiting} from './PostRaiting/PostRaiting';
import {PostTime} from './PostTime/PostTime';
import {BtnDelete} from './BtnDelete/BtnDelete';
import notphoto from '../Post/PostImg/img/notphoto.jpg';

export const Post = ({postData}) => {
  const {
    title,
    author,
    ups,
    created,
    thumbnail,
    thumbnail_height: thumbnailHeight,
    thumbnail_width: thumbnailWidth,
  } = postData;

  return (
    <li className={style.post} key={postData.id}>
      <PostImg
        postAlt={title}
        src={(thumbnailHeight && thumbnailWidth) ? thumbnail : notphoto}
      />
      <PostHeading postTitle={title} postAuthor={author}/>
      <PostRaiting ups={ups}/>
      <PostTime date={created}/>
      <BtnDelete label={'Кнопка для удаления поста'}/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
