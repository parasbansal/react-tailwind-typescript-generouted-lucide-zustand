import { create } from "zustand";

type CommonState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useLastUpdate = create<CommonState>()(
  (set): CommonState => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }),
);
