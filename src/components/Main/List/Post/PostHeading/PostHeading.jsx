import style from './PostHeading.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../UI/Text/Text';

export const PostHeading = ({postTitle, postAuthor}) => (
  <div className={style.content}>
    <Text
      As='h2'
      size={20} tsize={22}
      className={style.title}
    >
      <Text
        As='a'
        size={26} tsize={32}
        className={style.linkPost}
        href='#post'
      >
        {postTitle}
      </Text>
    </Text>

    <Text
      As='a'
      className={style.linkAuthor}
      href='#author'
    >
      {postAuthor}
    </Text>
  </div>
);

PostHeading.propTypes = {
  postTitle: PropTypes.string,
  postAuthor: PropTypes.string,
};
