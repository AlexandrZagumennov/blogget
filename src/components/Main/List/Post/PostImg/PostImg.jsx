import style from './PostImg.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const PostImg = (postAlt) => (
  <img className={style.img} src={notphoto} alt={postAlt} />
);

PostImg.propTypes = {
  postAlt: PropTypes.string,
};
