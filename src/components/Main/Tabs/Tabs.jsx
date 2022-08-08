import {useState, useEffect} from 'react';
import {assignRandomId} from '../../../utils/generateRandomId.js';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {debounceRaf} from '../../../utils/debounceRaf.js';
import {useNavigate} from 'react-router-dom';

const LIST = [
  {value: 'Главная', Icon: HomeIcon, link: 'rising'},
  {value: 'Топ', Icon: TopIcon, link: 'top'},
  {value: 'Лучшие', Icon: BestIcon, link: 'best'},
  {value: 'Горячее', Icon: HotIcon, link: 'hot'},
].map(assignRandomId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [tabValue, setTabValue] = useState('Главная');
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    // Оптимизация числа вызовов ф-ции handleResize
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick = {() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {tabValue}
            <ArrowIcon width={15} height={15}/>
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) &&
        <ul className={style.list} onClick={() => setIsDropdownOpen()}>
          {LIST.map(({value, link, id, Icon}) => (
            <li className={style.item} key={id}>
              <button
                className={style.btn}
                onClick={(() => {
                  setTabValue(value);
                  navigate(`/category/${link}`);
                })}
              >
                {value}
                {Icon && <Icon width={30} height={30}/>}
              </button>
            </li>
          ))}
        </ul>}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
