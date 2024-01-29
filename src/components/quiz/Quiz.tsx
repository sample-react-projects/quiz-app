import styles from "./Quiz.module.scss";
import Card from "../ui/card/Card";
import { useState } from "react";
import Welcome from "../welcome/Welcome";
import Questions from "../questions/Questions";

const Quiz: React.FC<{}> = ({}) => {
  const [startQuiz, setStartQuiz] = useState<boolean>(false);

  function handleStartQuiz() {
    setStartQuiz(true);
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.quiz__header}>
        <h1 className={styles["quiz__header-title"]}>React Quiz</h1>
      </div>
      <Card>
        {startQuiz ? (
          <Questions></Questions>
        ) : (
          <Welcome startQuiz={handleStartQuiz}></Welcome>
        )}
      </Card>
    </div>
  );
};

export default Quiz;
