import style from './Heading.module.css';

export const Heading = ({ content }) => {
  return <h1 className={style.heading }>{content}</h1>;
}
