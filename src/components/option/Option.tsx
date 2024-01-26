interface IOption {
  index: number;
  isCorrectAnswer: boolean;
  option: string;
}
import styles from "./Option.module.scss";

const Option: React.FC<IOption> = ({ index, option, isCorrectAnswer }) => {
  const prefix = String.fromCharCode(index + 97);

  return (
    <div
      className={`${styles.option} ${
        isCorrectAnswer ? styles.option__correct : null
      }`}
    >
      {prefix}. {option}
    </div>
  );
};

export default Option;
