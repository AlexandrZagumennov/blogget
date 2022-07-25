import {useState, useEffect} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth.js';
import {Text} from '../../UI/Text/Text';
import {BtnLogout} from './BtnLogout/BtnLogout';
import {URL_API} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [logout, setLogout] = useState(false);

  const handleLogout = () => {
    // удаляется токен из Local Storage
    delToken();
    // очищаются данные аунтентификации
    setAuth({});
  };

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        if (response.status === 401) {
          delToken();
        }
      })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.error(err);
        setAuth({});
      });
  }, [token]);

  const handleShowBtn = () => {
    setLogout(!logout);
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <div>
          <button className={style.btn} onClick={() => handleShowBtn()}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
          </button>
          {logout && <BtnLogout handleLogout={handleLogout}/>}
        </div>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg}/>
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
