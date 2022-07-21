import style from './PostRaitingUps.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';

export const PostRaitingUps = ({ups}) => (
  <Text As='p' className={style.ups}>{ups}</Text>
);

PostRaitingUps.propTypes = {
  ups: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
