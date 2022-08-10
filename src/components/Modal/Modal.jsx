import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useRef, useEffect} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';
import Preloader from '../UI/Preloader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [post, comments, status, error] = useCommentsData(id);

  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current) {
      navigate(`/category/${page}`);
    }
  };

  const handlePressEscape = e => {
    if (e.key === 'Escape') {
      navigate(`/category/${page}`);
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
        {status === 'loading' && (
          <div className={style.statusContainer}>
            <h3 className={style.statusTitle}>Загрузка...</h3>
            <Preloader size={250}/>
          </div>
        )}
        {status === 'error' && error.response.status === 404 &&
          navigate('*')
        }
        {status === 'loaded' && post && (
          <>
            <h2 className={style.title}>{post.title}</h2>

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
                {post.selftext}
              </Markdown>
            </div>
            <p className={style.author}>{post.author}</p>

            <FormComment/>
            <Comments comments={comments}/>

            <button className={style.close} onClick={() => {
              navigate(`/category/${page}`);
            }}>
              <CloseIcon />
            </button>
          </>
        )}
      </div>
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
