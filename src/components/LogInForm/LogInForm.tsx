import styles from './LogInForm.module.scss';
import MainButton from '../Button/MainButton';

const LogInForm = (): JSX.Element => {
  return (
      <form className={styles['login-form']}>
          <input
            type="text"
            id="user-name"
            name="user-name"
            className={styles.input}
            placeholder="Логин или email"
          ></input>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            placeholder="Пароль"
          ></input>
          <div className={styles['error-message']}></div>
          <MainButton isDisabled={false} style={{width: '19.5rem', height: '5.4rem', fontSize: '2.3rem', marginTop: '2rem'}} onClick={() => {} }>Войти</MainButton>
      </form>
  );
};

export default LogInForm;
