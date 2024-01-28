import styles from "./Welcome.module.scss";

const Welcome: React.FC<{}> = () => {
  return (
    <div className={styles.welcome}>
      <h2>Try your React knowledge with this quiz!</h2>
      <button className={styles["welcome__start"]}>Start</button>
    </div>
  );
};

export default Welcome;
