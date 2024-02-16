import { create } from "zustand";
import { Question } from "../types";
import { getQuestions } from "../api/questions";
import { persist } from "zustand/middleware";
import confetti from "canvas-confetti";

interface State {
  questions: Question[];
  currentQuestion: number;
  getQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  resetGame: () => void;
  amountQuestions: number;
  changeAmountQuestion: (amount: number) => void;
  isLoading: boolean;
}

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestion: 0,
        amountQuestions: 5,
        isLoading: false,

        getQuestions: async (limit: number) => {
          set({ isLoading: true });
          setTimeout(async () => {
            const data = await getQuestions();
            const questions = data
              .sort(() => Math.random() - 0.5)
              .slice(0, limit);

            set({ questions, isLoading: false });
          }, 2000);
        },
        selectAnswer(questionId, answerIndex) {
          const { questions } = get();
          const newQuestions = structuredClone(questions);
          const questionIndex = newQuestions.findIndex(
            (question) => question.id === questionId
          );
          const questionInfo = newQuestions[questionIndex];
          const isCorrectUserAnswer =
            questionInfo.correctAnswer === answerIndex;
          if (isCorrectUserAnswer) confetti();
          newQuestions[questionIndex] = {
            ...questionInfo,
            isCorrectUserAnswer,
            userSelectedAnswer: answerIndex,
          };
          set({ questions: newQuestions });
        },
        nextQuestion: () => {
          const { currentQuestion, questions } = get();
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
            set({ currentQuestion: nextQuestion });
          }
        },
        previousQuestion: () => {
          const { currentQuestion, questions } = get();
          const nextQuestion = currentQuestion - 1;
          if (nextQuestion < questions.length) {
            set({ currentQuestion: nextQuestion });
          }
        },
        resetGame: () => {
          set({ currentQuestion: 0, questions: [] });
        },
        changeAmountQuestion: (amount: number) => {
          set({ amountQuestions: amount });
        },
      };
    },
    {
      name: "questions",
    }
  )
);
