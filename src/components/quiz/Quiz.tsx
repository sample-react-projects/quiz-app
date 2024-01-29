import styles from "./Quiz.module.scss";
import Card from "../ui/card/Card";

function Quiz() {
  return (
    <div className={styles.quiz}>
      <div className={styles.quiz__header}>
        <h1 className={styles["quiz__header-title"]}>React Quiz</h1>
      </div>
      <Card></Card>
    </div>
  );
}

export default Quiz;
