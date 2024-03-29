import style from './FormComment.module.css';
import {Text} from '../../UI/Text/Text';
import {useAuth} from '../../../hooks/useAuth';
import {useSelector, useDispatch} from 'react-redux';
import {updateComment} from '../../../store/comment/commentReducer';

export const FormComment = () => {
  const value = useSelector(state => state.comment.comment);
  const dispatch = useDispatch();
  const [auth] = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit} className={style.form} >
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
      >
      </textarea>
      <button className={style.btn} >Отправить</button>
    </form>
  );
};
