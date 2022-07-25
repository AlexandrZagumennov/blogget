import style from './BtnLogout.module.css';
import PropTypes from 'prop-types';

export const BtnLogout = ({handleLogout}) => (
  <button className={style.logout} onClick={() => handleLogout()}>Выйти</button>
);

BtnLogout.propTypes = {
  handleLogout: PropTypes.func,
};
