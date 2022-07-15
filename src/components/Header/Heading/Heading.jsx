import style from './Heading.module.css';
import PropTypes from 'prop-types';

export const Heading = ({content}) => (
  <h1 className={style.heading }>{content}</h1>
);

Heading.propTypes = {
  content: PropTypes.string,
};
