import { makeAnalisys } from "@/main/factory/pages/analisys";
import { makeAnalysts } from "@/main/factory/pages/analysts";
import { makeCreateAccount } from "@/main/factory/pages/auth/createAccount/createAccount";
import { makeForgotPassword } from "@/main/factory/pages/auth/forgotPassword/forgotPassword";
import { makeLogin } from "@/main/factory/pages/auth/login/login";
import { makeResetPassword } from "@/main/factory/pages/auth/resetPassword/resetPassword";
import { makeClients } from "@/main/factory/pages/clients";
import { makeContracts } from "@/main/factory/pages/contracts";
import { makeProjects } from "@/main/factory/pages/projects";
import { dark } from "@/presentation/themes/dark";
import { IconContext } from "phosphor-react";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "../routes";
import { useTheme } from "../stores/theme";
import { light } from "../themes/light";

function App() {
  const { theme } = useTheme();
  const login = makeLogin();
  const createAccount = makeCreateAccount();
  const forgotPassword = makeForgotPassword();
  const resetPassword = makeResetPassword();
  const contracts = makeContracts();
  const projects = makeProjects();
  const analisys = makeAnalisys();
  const analysts = makeAnalysts();
  const clients = makeClients();
  const dashboard = makeClients();

  return (
    <div className="App">
      <IconContext.Provider
        value={{
          color: theme === "dark" ? "white" : "#344767",
          size: 20,
          weight: "bold",
          mirrored: false,
        }}
      >
        <ThemeProvider theme={theme === "dark" ? dark : light}>
          <AppRoutes
            makeLogin={login}
            makeCreateAccount={createAccount}
            makeForgotPassword={forgotPassword}
            makeResetPassword={resetPassword}
            makeContracts={contracts}
            makeProjects={projects}
            makeAnalisys={analisys}
            makeAnalysts={analysts}
            makeClients={clients}
            makeDashboard={dashboard}
          />
        </ThemeProvider>
      </IconContext.Provider>
    </div>
  );
}

export default App;
