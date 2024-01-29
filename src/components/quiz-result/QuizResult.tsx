import Button from "../ui/button/Button";
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
      <Button onClick={restartQuiz}>Restart</Button>
    </div>
  );
};

export default QuizResult;
