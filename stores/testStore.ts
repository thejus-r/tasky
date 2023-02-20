import {create} from 'zustand'

interface TestState {
    count: number,
    addCount: () => void
  }
  

const useTestStore = create<TestState>((set)=> ({
    count: 0,
    addCount: () => set((state)=>({count: state.count + 1}))
}))


export default useTestStore