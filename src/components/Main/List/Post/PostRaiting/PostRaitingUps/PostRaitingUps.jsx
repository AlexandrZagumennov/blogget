import style from './PostRaitingUps.module.css';
import PropTypes from 'prop-types';

export const PostRaitingUps = ({ups}) => (
  <p className={style.ups}>{ups}</p>
);

PostRaitingUps.propTypes = {
  ups: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
