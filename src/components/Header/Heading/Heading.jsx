import style from './Heading.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../UI/Text/Text';

export const Heading = ({content}) => (
  <Text
    As='h1'
    size={22} tsize={26}
    center
    bold
    className={style.heading }
  >
    {content}
  </Text>
);

Heading.propTypes = {
  content: PropTypes.string,
};
