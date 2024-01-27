import styles from "./QuizResult.module.scss";

interface IQuizResult {
  correctAnswersCount: number;
  restartQuiz: () => void;
  totalQuestions: number;
}
const QuizResult: React.FC<IQuizResult> = ({
  correctAnswersCount,
  restartQuiz,
  totalQuestions,
}) => {
  return (
    <div className={styles.result}>
      <h2>
        You got {correctAnswersCount} out of {totalQuestions} correct!
      </h2>
      <button className={styles["result__restart"]} onClick={restartQuiz}>
        Restart
      </button>
    </div>
  );
};

export default QuizResult;
