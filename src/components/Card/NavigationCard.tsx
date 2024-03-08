import styles from './NavigationCard.module.scss';

type CardProps = {
  data: NavigationCardData;
}

type NavigationCardData = {
  link: string;
  title: string;
  description: string;
  image: string;
};

const NavigationCard = (props: CardProps): JSX.Element => {
  const { data } = props;
  return (
    <div className={styles['navigation-card']} data-link={data.link}>
      <div
        className={styles['navigation-card__img']}
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <h2 className={styles['navigation-card__title']}>{data.title}</h2>
      <p className={styles['navigation-card__description']}>{data.description}</p>
    </div>
  );
};

export default NavigationCard;
