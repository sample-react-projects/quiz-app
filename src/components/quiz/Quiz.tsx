import styles from "./Quiz.module.scss";
import { questions } from "../../assets/questions";
import QuestionRenderer from "../question/QuestionRenderer";
import { useState } from "react";
import QuizResult from "../quiz-result/QuizResult";

const totalQuestions = questions.length;

function Quiz() {
  let [answerIds, setAnswerIds] = useState<string[]>([]);

  const currentQuestionIndex = answerIds.length;
  const currentQuestion = questions[currentQuestionIndex];

  function handleAnswerSubmit(answer: string) {
    setAnswerIds((currentAnswers) => [...currentAnswers, answer]);
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.quiz__header}>
        <h1 className={styles["quiz__header-title"]}>React Quiz</h1>
        <progress value={currentQuestionIndex} max={totalQuestions}></progress>
      </div>
      {currentQuestionIndex < totalQuestions ? (
        <>
          <div className={styles.quiz__question}>
            <QuestionRenderer
              key={questions[currentQuestionIndex].id}
              question={currentQuestion}
              onAnswerSubmitted={handleAnswerSubmit}
            ></QuestionRenderer>
          </div>
          <div className={styles.quiz__status}>
            {currentQuestionIndex + 1} of {totalQuestions} Questions
          </div>
        </>
      ) : (
        <QuizResult></QuizResult>
      )}
    </div>
  );
}

export default Quiz;
