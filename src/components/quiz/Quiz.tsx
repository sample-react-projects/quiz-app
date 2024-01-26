import styles from "./Quiz.module.scss";
import { questions } from "../../assets/questions";
import QuestionRenderer from "../question/QuestionRenderer";

function Quiz() {
  const totalQuestions = 7;
  const currentQuestionIndex = 2;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className={styles.quiz}>
      <div className={styles.quiz__header}>
        <h1 className={styles["quiz__header-title"]}>React Quiz</h1>
        <progress value={currentQuestionIndex} max={totalQuestions}></progress>
      </div>
      <div className={styles.quiz__question}>
        <QuestionRenderer question={currentQuestion}></QuestionRenderer>
      </div>
      <div className={styles.quiz__status}>
        {currentQuestionIndex + 1} of {totalQuestions} Questions
      </div>
    </div>
  );
}

export default Quiz;
