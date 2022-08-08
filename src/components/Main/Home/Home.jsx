import style from './Home.module.css';

export const Home = () => (
  <div className={style.container}>
    <h2>Стратовая страница</h2>
    <p className={style.greet}>Добро пожаловать!</p>
    <p className={style.selectCategory}>Выберите категорию.</p>
  </div>
);
