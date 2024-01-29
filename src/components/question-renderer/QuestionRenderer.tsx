import { useEffect, useRef, useState } from "react";
import { Question } from "../../models/Question";
import OptionRenderer from "../option-renderer/OptionRenderer";
import styles from "./QuestionRenderer.module.scss";

const TIME_TO_ANSWER = 4000;

interface IQuestionRenderer {
  question: Question;
  onAnswerSubmitted: (answer: string) => void;
}

const QuestionRenderer: React.FC<IQuestionRenderer> = ({
  question,
  onAnswerSubmitted,
}) => {
  const [answeredOption, setAnsweredOption] = useState<string>("");
  const [timeRemaining, setTimeRemaining] = useState<number>(TIME_TO_ANSWER);
  let intervalId = useRef<number>();

  useEffect(() => {
    function registerTimer() {
      setTimeRemaining((currentTimeRemaining) => {
        if (currentTimeRemaining === 100) {
          registerAnswer("");
        }

        return currentTimeRemaining - 100;
      });
    }

    intervalId.current = setInterval(registerTimer, 100);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  function registerAnswer(optionId: string) {
    clearInterval(intervalId.current);
    setAnsweredOption(optionId);
    setTimeout(
      () => {
        onAnswerSubmitted(optionId);
      },
      optionId ? 1000 : 0
    );
  }

  return (
    <>
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
            onOptionClicked={registerAnswer.bind(this, option.id)}
            {...option}
          />
        ))}
      </div>
      <div className={styles.question__timer}>
        <progress max={TIME_TO_ANSWER} value={timeRemaining}></progress>
      </div>
    </>
  );
};

export default QuestionRenderer;
