import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useRef, useEffect} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData.js';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);
  const closeRef = useRef(null);
  const data = useCommentsData(id);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }

    if (target === closeRef.current) {
      closeModal();
    }
  };

  const handlePressEscape = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handlePressEscape);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handlePressEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      {data ?
        <div className={style.modal}>
          <h2 className={style.title}>{data[0].title}</h2>

          <div className={style.content}>
            <Markdown options={{
              overrides: {
                a: {
                  props: {
                    target: '_blank',
                  },
                },
              },
            }}>
              {data[0].selftext}
            </Markdown>
          </div>

          <p className={style.author}>{data[0].author}</p>

          <FormComment/>
          <Comments comments={data[1]}/>

          <button className={style.close} >
            <CloseIcon ref={closeRef}/>
          </button>
        </div> : <div className={style.modalPrev}>Загрузка...</div>}
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
