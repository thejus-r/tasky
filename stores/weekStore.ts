import { create } from 'zustand'

interface WeekState {
  active: Date
  setActive: (active: Date) => void
}

const useWeekStore = create<WeekState>()((set) => ({
    active: new Date(),
    setActive: (active) => set(()=> ({active: active}))
}))

export default useWeekStore