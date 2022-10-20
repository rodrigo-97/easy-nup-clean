import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { usePersistedState } from "../hooks/usePersistedState";
import { dark } from "../themes/dark";
import { light } from "../themes/light";
import { Login } from "./Login";

type Theme = "dark" | "light";

export function Auth() {
  const [currentTheme, setCurrentTheme] = usePersistedState<Theme>(
    "APP_THEME",
    "dark"
  );
  const navigate = useNavigate();

  function toggleTheme() {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  }

  function handleNavigate(route: string) {
    navigate(route);
  }

  return (
    <ThemeProvider theme={currentTheme === "dark" ? dark : light}>
      <Routes>
        <Route path="auth">
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Navigate to="auth/login" replace />} />
      </Routes>
    </ThemeProvider>
  );
}
