interface IOption {
  answered: boolean;
  index: number;
  isCorrectAnswer: boolean;
  onOptionClick: () => void;
  option: string;
}
import styles from "./Option.module.scss";

const Option: React.FC<IOption> = ({
  answered,
  index,
  isCorrectAnswer,
  onOptionClick,
  option,
}) => {
  const prefix = String.fromCharCode(index + 97);

  function handleOptionClick() {
    if (!answered) {
      onOptionClick();
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
