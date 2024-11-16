import { create, StoreApi, UseBoundStore } from "zustand";
import { devtools } from "zustand/middleware";

export interface IAuthStore {
  users: any;
  setUser: (payload: any) => void;
}

/** locale값을 client에서도 활용할 수 있는 전역 상태 store */
export const useUserStore: UseBoundStore<StoreApi<IAuthStore>> = create(
  devtools((setState) => ({
    users: [],
    setUser: (user) => {
      setState((state) => ({ users: [...state.users, user] }));
    },
  })),
);
