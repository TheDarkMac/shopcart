import { create } from "zustand";

interface CounterState {
  articleNumber: number; 
  increment: () => void; 
  decrement: () => void; 
}

export const useCounter = create<CounterState>((set) => ({
  articleNumber: 0,
  increment: () => set((state) => ({ articleNumber: state.articleNumber + 1 })),
  decrement: () => set((state) => ({ articleNumber: state.articleNumber - 1 })),
}));


export interface ArticleState{
  articleName: string,
  articlePrice: number,
  articleImage: string,
  articleDescription: string
}

export const useArticle = create<ArticleState>((set)=>({
  articleName: 'default name',
  articlePrice: 4000,
  articleImage: '',
  articleDescription: '',
  
}));