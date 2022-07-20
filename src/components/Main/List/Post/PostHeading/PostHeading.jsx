import style from './PostHeading.module.css';
import PropTypes from 'prop-types';

export const PostHeading = ({postTitle, postAuthor}) => (
  <div className={style.content}>
    <h2 className={style.title}>
      <a className={style.linkPost} href='#post'>
        {postTitle}
      </a>
    </h2>
    <a className={style.linkAuthor} href='#author'>{postAuthor}</a>
  </div>
);

PostHeading.propTypes = {
  postTitle: PropTypes.string,
  postAuthor: PropTypes.string,
};
