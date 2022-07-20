import style from './PostRaiting.module.css';
import PropTypes from 'prop-types';
import {PostRaitingUps} from './PostRaitingUps/PostRaitingUps';
import {BtnArrowUp} from './BtnArrowUp/BtnArrowUp';
import {BtnArrowDown} from './BtnArrowDown/BtnArrowDown';

export const PostRaiting = ({ups}) => (
  <div className={style.rating}>
    <BtnArrowUp label='Повысить рейтинг'/>
    <PostRaitingUps ups={ups}/>
    <BtnArrowDown label='Понизить рейтинг'/>
  </div>
);

PostRaiting.propTypes = {
  ups: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
