import { create, StoreApi, UseBoundStore } from "zustand";
import { devtools } from "zustand/middleware";

export interface IAuthStore {
  users: any;
  setUser: (payload: any) => void;
}

export const useUserStore: UseBoundStore<StoreApi<IAuthStore>> = create(
  devtools((setState) => ({
    users: [],
    setUser: (user) => {
      setState((state) => ({ users: [...state.users, user] }));
    },
  })),
);
