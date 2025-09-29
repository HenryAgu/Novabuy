import { createStore } from "zustand";

export type CounterState = {
  counts: Record<string, number>; // store counts by item id
};

export type CounterActions = {
  incrementCount: (id: string) => void;
  decrementCount: (id: string) => void;
};

export type CounterStore = CounterState & CounterActions;

export const defaultInitState: CounterState = {
  counts: {}, 
};

export const createCounterStore = (
  initState: CounterState = defaultInitState
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    incrementCount: (id: string) =>
      set((state) => ({
        counts: {
          ...state.counts,
          [id]: (state.counts[id] || 1) + 1, // default to 1 if not set
        },
      })),
    decrementCount: (id: string) =>
      set((state) => ({
        counts: {
          ...state.counts,
          [id]: Math.max((state.counts[id] || 1) - 1, 1), // don't go below 1
        },
      })),
  }));
};
