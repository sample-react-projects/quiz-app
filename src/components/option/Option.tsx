interface IOption {
  answered: boolean;
  index: number;
  isCorrectAnswer: boolean;
  option: string;
}
import styles from "./Option.module.scss";

const Option: React.FC<IOption> = ({
  answered,
  index,
  isCorrectAnswer,
  option,
}) => {
  const prefix = String.fromCharCode(index + 97);

  function handleOptionClick() {
    if (!answered) {
    }
  }

  return (
    <>
      <div
        onClick={handleOptionClick}
        className={`${styles.option} ${
          isCorrectAnswer ? styles.option__correct : ""
        }`}
      >
        {prefix}. {option}
      </div>
    </>
  );
};

export default Option;
