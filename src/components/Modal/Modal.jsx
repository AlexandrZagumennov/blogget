import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useRef, useEffect} from 'react';

export const Modal = ({title, author, markdown, closeModal}) => {
  const overlayRef = useRef(null);
  const closeRef = useRef(null);

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
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>

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
            {markdown ? markdown : 'В заметке нет текста :-('}
          </Markdown>
        </div>

        <p className={style.author}>{author}</p>

        <button className={style.close} >
          <CloseIcon ref={closeRef}/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};