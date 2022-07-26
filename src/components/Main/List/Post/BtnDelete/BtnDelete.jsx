import style from './BtnDelete.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const BtnDelete = ({label}) => (
  <button className={style.delete} >
    <DeleteIcon label={label}/>
  </button>
);

BtnDelete.propTypes = {
  label: PropTypes.string,
};
