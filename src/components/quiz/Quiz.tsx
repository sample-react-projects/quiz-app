import styles from "./Quiz.module.scss";
import { questions } from "../../assets/questions";
import QuestionRenderer from "../question-renderer/QuestionRenderer";
import { useState } from "react";
import QuizResult from "../quiz-result/QuizResult";
import Card from "../ui/card/Card";

const totalQuestions = questions.length;

function Quiz() {
  const [answerIds, setAnswerIds] = useState<Map<string, string>>(
    new Map<string, string>()
  );
  const currentQuestionIndex = answerIds.size;
  const currentQuestion = questions[currentQuestionIndex];

  let correctAnswersCount = 0;

  if (currentQuestionIndex === totalQuestions) {
    questions.forEach((question) => {
      correctAnswersCount += +(
        question.correctAnswer === answerIds.get(question.id)
      );
    });
  }

  function handleAnswerSubmit(answer: string) {
    setAnswerIds((currentAnswerIds) => {
      currentAnswerIds.set(currentQuestion.id, answer);
      return new Map(currentAnswerIds);
    });
  }

  function startQuiz() {
    setAnswerIds(new Map<string, string>());
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.quiz__header}>
        <h1 className={styles["quiz__header-title"]}>React Quiz</h1>
        <progress value={currentQuestionIndex} max={totalQuestions}></progress>
      </div>
      <Card>
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
          <QuizResult
            correctAnswersCount={correctAnswersCount}
            restartQuiz={startQuiz}
            totalQuestions={totalQuestions}
          ></QuizResult>
        )}
      </Card>
    </div>
  );
}

export default Quiz;
