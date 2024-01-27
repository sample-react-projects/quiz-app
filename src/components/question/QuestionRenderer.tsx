import { useState } from "react";
import { Question } from "../../models/Question";
import Option from "../option/Option";
import styles from "./QuestionRenderer.module.scss";

const QuestionRenderer: React.FC<{ question: Question }> = ({ question }) => {
  let [answeredOption, setAnsweredOption] = useState<string>("");

  function onOptionClicked(optionId: string) {
    setAnsweredOption(optionId);
  }

  return (
    <div className={styles.question}>
      <div className={styles.question__title}>Q. {question.question}</div>
      <div className={styles.question__options}>
        {question.options.map((option, index) => (
          <Option
            answeredOption={answeredOption}
            index={index}
            isCorrectAnswer={
              answeredOption === option.id &&
              option.id === question.correctAnswer
            }
            key={option.id}
            onOptionClick={onOptionClicked.bind(this, option.id)}
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
