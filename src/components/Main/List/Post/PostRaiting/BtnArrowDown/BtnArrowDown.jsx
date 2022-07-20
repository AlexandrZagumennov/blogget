import style from './BtnArrowDown.module.css';
import PropTypes from 'prop-types';

export const BtnArrowDown = ({label}) => (
  <button className={style.down} aria-label={label}/>
);

BtnArrowDown.propTypes = {
  label: PropTypes.string,
};
