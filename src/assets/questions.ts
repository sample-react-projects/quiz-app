import { Question } from "../models/Question";

export const questions: Question[] = [
  {
    id: "q1",
    question: "Which of the following definitions best describes React.js?",
    options: [
      {
        id: "a1",
        option:
          "A library to build user interfaces with help of declarative code.",
      },
      { id: "a2", option: "A library for managing state in web applications." },
      {
        id: "a3",
        option:
          "A framework to build user interfaces with help of imperative code.",
      },
      {
        id: "a4",
        option: "A library used for building mobile applications only.",
      },
    ],
    correctAnswer: "a1",
  },
  {
    id: "q2",
    question: "What purpose do React hooks serve?",
    options: [
      {
        id: "a1",
        option:
          "Enabling the use of state and other React features in functional components.",
      },
      {
        id: "a2",
        option: "Creating responsive layouts in React applications.",
      },
      { id: "a3", option: "Handling errors within the application." },
      {
        id: "a4",
        option: "Part of the Redux library for managing global state.",
      },
    ],
    correctAnswer: "a1",
  },
  {
    id: "q3",
    question: "Can you identify what JSX is?",
    options: [
      {
        id: "a1",
        option:
          "A JavaScript extension that adds HTML-like syntax to JavaScript.",
      },
      {
        id: "a2",
        option: "A JavaScript library for building dynamic user interfaces.",
      },
      {
        id: "a3",
        option:
          "A specific HTML version that was explicitly created for React.",
      },
      {
        id: "a4",
        option: "A tool for making HTTP requests in a React application.",
      },
    ],
    correctAnswer: "a1",
  },
  {
    id: "q4",
    question: "What is the most common way to create a component in React?",
    options: [
      {
        id: "a1",
        option:
          "By defining a JavaScript function that returns a renderable value.",
      },
      { id: "a2", option: "By defining a custom HTML tag in JavaScript." },
      { id: "a3", option: "By creating a file with a .jsx extension." },
      {
        id: "a4",
        option: 'By using the "new" keyword followed by the component name.',
      },
    ],
    correctAnswer: "a1",
  },
  {
    id: "q5",
    question: 'What does the term "React state" imply?',
    options: [
      {
        id: "a1",
        option:
          "An object in a component that holds values and may cause the component to render on change.",
      },
      { id: "a2", option: "The lifecycle phase a React component is in." },
      {
        id: "a3",
        option:
          "The overall status of a React application, including all props and components.",
      },
      {
        id: "a4",
        option: "A library for managing global state in React applications.",
      },
    ],
    correctAnswer: "a1",
  },
  {
    id: "q6",
    question: "How do you typically render list content in React apps?",
    options: [
      {
        id: "a1",
        option:
          "By using the map() method to iterate over an array of data and returning JSX.",
      },
      {
        id: "a2",
        option:
          "By using the for() loop to iterate over an array of data and returning JSX.",
      },
      {
        id: "a3",
        option:
          "By using the forEach() method to iterate over an array of data and returning JSX.",
      },
      {
        id: "a4",
        option:
          "By using the loop() method to iterate over an array of data and returning JSX.",
      },
    ],
    correctAnswer: "a1",
  },
  {
    id: "q7",
    question: "Which approach can NOT be used to render content conditionally?",
    options: [
      { id: "a1", option: "Using a the #if template syntax." },
      { id: "a2", option: "Using a ternary operator." },
      { id: "a3", option: "Using the && operator." },
      { id: "a4", option: "Using an if-else statement." },
    ],
    correctAnswer: "a1",
  },
];
