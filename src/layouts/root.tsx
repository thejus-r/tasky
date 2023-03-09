import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <body className="p-4 bg-stone-900 w-full h-screen">
      <Outlet />
    </body>
  );
}
