import create from "zustand";

type Props = {
  token: string;
  setToken: Function;
  removeToken: Function;
  isAuthenticated: boolean;
};

export const useAuthStore = create<Props>((set) => ({
  token: JSON.parse(localStorage.getItem("APP_TOKEN") || "{}"),
  isAuthenticated:
    !!JSON.parse(localStorage.getItem("APP_TOKEN") || "false") || false,
  setToken: (token: string) =>
    set(() => {
      localStorage.setItem("APP_TOKEN", JSON.stringify(token));
      return {
        token,
      };
    }),

  removeToken: () =>
    set(() => {
      localStorage.removeItem("APP_TOKEN");

      return {
        token: "",
      };
    }),
}));
