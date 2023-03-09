import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="bg-stone-900 min-h-screen text-white">
      <Header />
      <Outlet />
    </div>
  );
}
