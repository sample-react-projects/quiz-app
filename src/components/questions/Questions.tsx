import { useState } from "react";
import { questions } from "../../assets/questions";
import QuestionRenderer from "../question-renderer/QuestionRenderer";
import QuizResult from "../quiz-result/QuizResult";
import styles from "./Questions.module.scss";

const totalQuestions = questions.length;

const Questions: React.FC<{}> = () => {
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
    <>
      <progress
        className={styles.questions__progress}
        value={currentQuestionIndex}
        max={totalQuestions}
      ></progress>
      {currentQuestionIndex < totalQuestions ? (
        <>
          <div className={styles.questions__question}>
            <QuestionRenderer
              key={questions[currentQuestionIndex].id}
              question={currentQuestion}
              onAnswerSubmitted={handleAnswerSubmit}
            ></QuestionRenderer>
          </div>
          <div className={styles.questions__status}>
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
    </>
  );
};

export default Questions;
