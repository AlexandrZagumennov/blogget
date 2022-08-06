import RingLoader from 'react-spinners/RingLoader';
import PropTypes from 'prop-types';

export const Preloader = ({size}) => <RingLoader css={{display: 'block'}} size={size}/>;

Preloader.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])};
