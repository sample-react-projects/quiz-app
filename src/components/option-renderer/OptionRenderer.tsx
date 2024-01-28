interface IOption {
  answeredOption: string;
  id: string;
  index: number;
  isCorrectAnswer: boolean;
  onOptionClicked: () => void;
  option: string;
}
import styles from "./OptionRenderer.module.scss";

const OptionRenderer: React.FC<IOption> = ({
  answeredOption,
  id,
  index,
  isCorrectAnswer,
  onOptionClicked,
  option,
}) => {
  const prefix = String.fromCharCode(index + 97);

  function handleOptionClick() {
    if (!answeredOption) {
      onOptionClicked();
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

export default OptionRenderer;
