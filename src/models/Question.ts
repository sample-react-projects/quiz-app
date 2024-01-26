import { Option } from "./Option";

export type Question = {
  id: string;
  question: string;
  options: Option[];
  correctAnswer: string;
};
