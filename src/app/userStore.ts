import { create } from "zustand";

type UserStore = {
  user: null | string;
};

const useUserStore = create<UserStore>(() => ({
  user: null,
}));

export default useUserStore;
