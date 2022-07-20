import style from './BtnArrowUp.module.css';
import PropTypes from 'prop-types';

export const BtnArrowUp = ({label}) => (
  <button className={style.up} aria-label={label}/>
);

BtnArrowUp.propTypes = {
  label: PropTypes.string,
};
