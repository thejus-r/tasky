import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../app/hooks";
export default function ProtectedLayout() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLogged);

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
}
