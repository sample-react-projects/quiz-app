import React from "react";
import ReactDOM from "react-dom/client";
import Quiz from "./components/quiz/Quiz.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Quiz />
  </React.StrictMode>
);
