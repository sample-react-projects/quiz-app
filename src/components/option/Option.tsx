interface IOption {
  id: string;
  index: number;
  isCorrectAnswer: boolean;
  option: string;
  questionId: string;
}
import { useState } from "react";
import styles from "./Option.module.scss";

const Option: React.FC<IOption> = ({
  id,
  index,
  option,
  isCorrectAnswer,
  questionId,
}) => {
  const prefix = String.fromCharCode(index + 97);
  const [answered, setAnswered] = useState<boolean>(false);

  function handleOptionChange() {
    setAnswered(true);
  }

  return (
    <>
      <input
        type="radio"
        className={styles.input}
        disabled={answered}
        name={questionId}
        onChange={handleOptionChange}
        id={id}
      ></input>
      <label
        htmlFor={id}
        className={`${styles.option} ${
          isCorrectAnswer ? styles.option__correct : ""
        }`}
      >
        {prefix}. {option}
      </label>
    </>
  );
};

export default Option;
