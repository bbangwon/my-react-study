import { create } from "zustand";

const useUserStore = create((set) => ({
  username: "BREADONE",
  updateName: (newName) => set({ username: newName }),
}));

export default useUserStore;
