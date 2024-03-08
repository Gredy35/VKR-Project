import styles from './MainButton.module.scss';

type MainButtonProps = {
  isDisabled: boolean;
  style: Record<string, string>;
  onClick: () => void;
};

const MainButton = (props: React.PropsWithChildren<MainButtonProps>): JSX.Element => {
  const { isDisabled, onClick, style, children } = props;

  const handleButtonClick = () => {
    if (isDisabled) return;
    onClick();
  };
  
  return (
    <button
      onClick={handleButtonClick}
      className={isDisabled ? styles['button-disabled'] : styles.button}
      style={style}
      role="button"
    >
      {children}
    </button>
  );
};

export default MainButton;
