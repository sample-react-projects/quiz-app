interface IOption {
  answeredOption: string;
  id: string;
  index: number;
  isCorrectAnswer: boolean;
  onOptionClick: () => void;
  option: string;
}
import styles from "./Option.module.scss";

const Option: React.FC<IOption> = ({
  answeredOption,
  id,
  index,
  isCorrectAnswer,
  onOptionClick,
  option,
}) => {
  const prefix = String.fromCharCode(index + 97);

  function handleOptionClick() {
    if (!answeredOption) {
      onOptionClick();
    }
  }

  return (
    <div
      onClick={handleOptionClick}
      className={`${styles.option} ${
        answeredOption === id
          ? styles["option--answered"] +
            " " +
            styles["option--answered-" + (isCorrectAnswer ? "right" : "wrong")]
          : ""
      }`}
    >
      {prefix}. {option}
    </div>
  );
};

export default Option;
