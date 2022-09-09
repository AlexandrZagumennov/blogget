import {useSelector} from 'react-redux';
import style from './Home.module.css';

export const Home = () => {
  const token = useSelector(state => state.token.token);
  console.log(token);

  return (
    <div className={style.container}>
      {token ? (
        <>
          <h2>Стратовая страница</h2>
          <p className={style.greet}>Добро пожаловать!</p>
          <p className={style.selectCategory}>Выберите категорию.</p>
        </>
      ) : (<h2>Авторизуйтесь, чтобы продолжить</h2>)}
    </div>

  );
};
