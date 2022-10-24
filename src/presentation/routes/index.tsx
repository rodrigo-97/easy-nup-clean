import { makeForgotPassword } from "@/main/factory/pages/auth/login/forgotPassword";
import { Analisys } from "@/presentation/pages/Analisys";
import { Analysts } from "@/presentation/pages/Analysts";
import { Clients } from "@/presentation/pages/Clients";
import { Contracts } from "@/presentation/pages/Contracts";
import { Dashboard } from "@/presentation/pages/Dashboard";
import { Projects } from "@/presentation/pages/Projects";
import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth";

type Props = {
  makeLogin: React.ReactElement;
  makeCreateAccount: React.ReactElement;
  makeForgotPassword: React.ReactElement;
  makeResetPassword: React.ReactElement;
};

export function AppRoutes({
  makeLogin,
  makeCreateAccount,
  makeForgotPassword,
  makeResetPassword,
}: Props) {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  function handleNavigate(route: string) {
    navigate(route);
  }

  return (
    // <If
    //   condition={isAuthenticated}
    //   then={
    //     <Fragment>
    //       <Navbar>
    //         <div>LOGO NUP</div>
    //         <div>
    //           <Button color="primary" onClick={toggleTheme}>
    //             <If
    //               condition={currentTheme === "dark"}
    //               then={<Moon />}
    //               else={<Sun color="white" />}
    //             />
    //             Alterar tema
    //           </Button>
    //         </div>
    //       </Navbar>
    //       <Content>
    //         <Sidenav>
    //           {sidenavTiles.map((item) => {
    //             return (
    //               <SidenavTile
    //                 key={item.title}
    //                 onClick={() => handleNavigate(item.route)}
    //               >
    //                 <item.icon />
    //                 {item.title}
    //               </SidenavTile>
    //             );
    //           })}
    //         </Sidenav>
    //         <Core>

    //         </Core>
    //       </Content>
    //     </Fragment>
    //   }
    //   else={<Auth />}
    // />
    <Routes>
      <Route path="/">
        <Route path="auth">
          <Route path="login" index element={makeLogin} />
          <Route path="create-account" element={makeCreateAccount} />
          <Route path="forgot-password" element={makeForgotPassword} />
          <Route path="reset-password" element={makeResetPassword} />
          <Route path="*" element={<Navigate to="/auth/login" replace />} />
        </Route>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="contracts" element={<Contracts />} />
          <Route path="projects" element={<Projects />} />
          <Route path="analisys" element={<Analisys />} />
          <Route path="analysts" element={<Analysts />} />
          <Route path="clients" element={<Clients />} />
        </Route>
      </Route>
    </Routes>
  );
}
