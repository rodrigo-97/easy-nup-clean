import { makeLogin } from "@/main/factory/pages/auth/login/login";
import { Outlet } from "react-router-dom";

export function PrivateRoute() {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return <Outlet />;
  }

  return makeLogin();
}
