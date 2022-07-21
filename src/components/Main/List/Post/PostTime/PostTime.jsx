import style from './PostTime.module.css';
import formatDate from '../../../../../utils/formatDate';
import {Text} from '../../../../UI/Text/Text';
import PropTypes from 'prop-types';

export const PostTime = ({date}) => (
  <Text
    As='time'
    className={style.date}
    dateTime={date}
    size={10}
    tsize={16}
    bold
  >
    {formatDate(date)}
  </Text>
);

PostTime.propTypes = {
  date: PropTypes.string,
};
