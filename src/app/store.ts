import { create } from "zustand";

type State = {
  today: Date;
  active: Date;
};

type Action = {
  setActive: (date: Date) => void;
};

const useWeekStore = create<State & Action>((set, get) => ({
  today: new Date(),
  active: new Date(),
  setActive: (date) => set(() => ({ active: date })),
}));

export default useWeekStore;
