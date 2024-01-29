import Button from "../ui/button/Button";
import styles from "./Welcome.module.scss";

interface IWelcome {
  startQuiz: () => void;
}

const Welcome: React.FC<IWelcome> = ({ startQuiz }) => {
  return (
    <div className={styles.welcome}>
      <h2>Try your React knowledge with this quiz!</h2>
      <Button onClick={startQuiz}>Start</Button>
    </div>
  );
};

export default Welcome;
