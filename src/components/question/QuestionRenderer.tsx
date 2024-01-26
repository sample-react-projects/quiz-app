import { Question } from "../../models/Question";
import Option from "../option/Option";
import styles from "./QuestionRenderer.module.scss";

const QuestionRenderer: React.FC<{ question: Question }> = ({ question }) => {
  return (
    <div className={styles.question}>
      <div className={styles.question__title}>Q. {question.question}</div>
      <div className={styles.question__options}>
        {question.options.map((option, index) => (
          <Option
            key={option.id}
            {...option}
            questionId={question.id}
            index={index}
            isCorrectAnswer={question.correctAnswer === option.id}
          />
        ))}
      </div>
      <div className={styles.question__timer}>
        <progress max={3} value={3}></progress>
      </div>
    </div>
  );
};

export default QuestionRenderer;
