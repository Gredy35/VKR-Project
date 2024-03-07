import { useState } from 'react';
import styles from './Header.module.scss';
import MainButton from '../Button/MainButton';
import { PopUp } from '../PopUp/PopUp';
import LogInForm from '../LogInForm/LogInForm';

const Header = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  return (
    <header className={styles.header}>
      <p className={styles.title}>вкр</p><MainButton isDisabled={false} onClick={() => {setIsPopupVisible(true); } } style={{marginRight: '8rem'}}>Войти</MainButton>
    <PopUp isVisible={isPopupVisible} onClose={() => {setIsPopupVisible(false)} }><LogInForm /></PopUp>
    </header>
  );
};

export default Header;
