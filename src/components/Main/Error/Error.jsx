import style from './Error.module.css';

export const Error = () => (
  <div className={style.container}>
    <h2 className={style.title}>404</h2>
    <p className={style.description}>Страница не найдена</p>
  </div>
);
