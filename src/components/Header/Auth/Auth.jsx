import {useState, useContext} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth.js';
import {Text} from '../../UI/Text/Text';
import {BtnLogout} from './BtnLogout/BtnLogout';
import {authContext} from '../../../context/authContext';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store';

export const Auth = () => {
  const [logout, setLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const dispatch = useDispatch();

  const handleShowBtn = () => {
    setLogout(!logout);
  };

  const handleLogout = () => {
    dispatch(deleteToken());
    clearAuth();
    handleShowBtn();
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
          {logout && <BtnLogout handleLogout={() => handleLogout()}/>}
        </div>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg}/>
        </Text>
      )}
    </div>
  );
};
