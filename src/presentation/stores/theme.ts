import create from "zustand";

type Theme = "dark" | "light";

type Props = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useTheme = create<Props>((set) => ({
  theme: JSON.parse(localStorage.getItem("APP_THEME") || "{}"),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));
