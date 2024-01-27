import { useState } from "react";
import { Question } from "../../models/Question";
import Option from "../option/Option";
import styles from "./QuestionRenderer.module.scss";

const QuestionRenderer: React.FC<{ question: Question }> = ({ question }) => {
  let [answeredOption, setAnsweredOption] = useState<string>();

  function onOptionClicked(optionId: string) {
    setAnsweredOption(optionId);
  }

  return (
    <div className={styles.question}>
      <div className={styles.question__title}>Q. {question.question}</div>
      <div className={styles.question__options}>
        {question.options.map((option, index) => (
          <Option
            answered={answeredOption === option.id}
            index={index}
            isCorrectAnswer={
              answeredOption === option.id &&
              question.correctAnswer === option.id
            }
            key={option.id}
            onOptionClick={onOptionClicked.bind(this, option.id)}
            option={option.option}
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
