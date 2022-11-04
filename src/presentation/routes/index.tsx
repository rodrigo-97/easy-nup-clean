import { Dashboard } from "@/presentation/pages/Dashboard";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/privateRoute";

type Props = {
  makeLogin: React.ReactElement;
  makeCreateAccount: React.ReactElement;
  makeForgotPassword: React.ReactElement;
  makeResetPassword: React.ReactElement;
  makeContracts: React.ReactElement;
  makeProjects: React.ReactElement;
  makeAnalisys: React.ReactElement;
  makeAnalysts: React.ReactElement;
  makeClients: React.ReactElement;
  makeDashboard: React.ReactElement;
};

export function AppRoutes({
  makeLogin,
  makeCreateAccount,
  makeForgotPassword,
  makeResetPassword,
  makeContracts,
  makeProjects,
  makeAnalisys,
  makeAnalysts,
  makeClients,
  makeDashboard,
}: Props) {
  return (
    <Routes>
      <Route path="">
        <Route path="auth">
          <Route path="login" index element={makeLogin} />
          <Route path="create-account" element={makeCreateAccount} />
          <Route path="forgot-password" element={makeForgotPassword} />
          <Route path="reset-password" element={makeResetPassword} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route index element={makeDashboard} />
          <Route path="contracts" element={makeContracts} />
          <Route path="projects" element={makeProjects} />
          <Route path="analisys" element={makeAnalisys} />
          <Route path="analysts" element={makeAnalysts} />
          <Route path="clients" element={makeClients} />
        </Route>
        <Route path="*" element={<Navigate to="" replace />} />
      </Route>
    </Routes>
  );
}
