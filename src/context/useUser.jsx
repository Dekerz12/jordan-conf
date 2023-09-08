import { getUser, removeUser } from "../utils";
import { create } from "zustand";
import useEditor from "./useEditor";
const useUser = create((set) => {
  return {
    isAuthenticated: !!getUser(),
    login: () => set(() => ({ isAuthenticated: true })),
    logout: () =>
      set(() => {
        removeUser();
        useEditor.reset();
        return { isAuthenticated: false };
      }),
  };
});

export default useUser;
