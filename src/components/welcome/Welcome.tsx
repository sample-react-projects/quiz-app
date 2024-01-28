import styles from "./Welcome.module.scss";

interface IWelcome {
  startQuiz: () => void;
}

const Welcome: React.FC<IWelcome> = ({ startQuiz }) => {
  return (
    <div className={styles.welcome}>
      <h2>Try your React knowledge with this quiz!</h2>
      <button className={styles["welcome__start"]} onClick={startQuiz}>
        Start
      </button>
    </div>
  );
};

export default Welcome;
