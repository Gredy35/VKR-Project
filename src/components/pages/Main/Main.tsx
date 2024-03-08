import styles from "./Main.module.scss";
import Header from "../../Header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.main__background}>
          <div className={`container ${styles.main__container}`}>
            <div className={styles.main__info}>
              <h1 className={styles.main__title}>вкр</h1>
              <p className={styles.main__text}>
                Информационная система для загрузки и проверки дипломных работ
                студентов
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
