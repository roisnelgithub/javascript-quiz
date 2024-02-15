import { create } from "zustand";
import { Question } from "../types";
import { getQuestions } from "../api/questions";

interface State {
  questions: Question[];
  currentQuestion: number;
  getQuestions: (limit: number) => Promise<void>;
}

export const useQuestionsStore = create<State>((set) => {
  return {
    questions: [],
    currentQuestion: 0,

    getQuestions: async (limit: number) => {
      const data = await getQuestions();
      const questions = data.sort(() => Math.random() - 0.5).slice(0, limit);
      set({ questions });
    },
  };
});
