import {useState, useContext} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth.js';
import {Text} from '../../UI/Text/Text';
import {BtnLogout} from './BtnLogout/BtnLogout';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [logout, setLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const handleLogout = () => {
    // удаляется токен из Local Storage
    delToken();
    // очищаются данные аунтентификации
    clearAuth();
  };

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
