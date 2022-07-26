import style from './PostImg.module.css';
import PropTypes from 'prop-types';

export const PostImg = ({src, postAlt}) => (
  <img className={style.img} src={src} alt={postAlt} />
);

PostImg.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  postAlt: PropTypes.string,
};
