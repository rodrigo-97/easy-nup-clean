import { Analisys } from "@/presentation/pages/Analisys";
import { Analysts } from "@/presentation/pages/Analysts";
import { Clients } from "@/presentation/pages/Clients";
import { Contracts } from "@/presentation/pages/Contracts";
import { Dashboard } from "@/presentation/pages/Dashboard";
import { Projects } from "@/presentation/pages/Projects";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

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
  return (
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
