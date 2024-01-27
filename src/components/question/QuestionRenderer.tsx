import { useState } from "react";
import { Question } from "../../models/Question";
import OptionRenderer from "../option/OptionRenderer";
import styles from "./QuestionRenderer.module.scss";
import { Option } from "../../models/Option";

interface IQuestionRenderer {
  question: Question;
  onAnswerSubmitted: (answer: string) => void;
}

const QuestionRenderer: React.FC<IQuestionRenderer> = ({
  question,
  onAnswerSubmitted,
}) => {
  let [answeredOption, setAnsweredOption] = useState<string>("");

  function onOptionClicked(optionId: string) {
    setAnsweredOption(optionId);
  }

  return (
    <div className={styles.question}>
      <div className={styles.question__title}>Q. {question.question}</div>
      <div className={styles.question__options}>
        {question.options.map((option, index) => (
          <OptionRenderer
            answeredOption={answeredOption}
            index={index}
            isCorrectAnswer={
              answeredOption === option.id &&
              option.id === question.correctAnswer
            }
            key={option.id}
            onOptionClicked={onOptionClicked.bind(this, option)}
            {...option}
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
