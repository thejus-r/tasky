import { create } from "zustand";

type WeekStore = {
  today: Date;
  active: Date;
  setActive: (date: Date) => void;
};

const useWeekStore = create<WeekStore>((set, get) => ({
  today: new Date(),
  active: new Date(),
  setActive: (date) => set(() => ({ active: date })),
}));

export default useWeekStore;
