import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Root from "./layouts/root";
import { QueryClient, QueryClientProvider } from "react-query";
import SignUpPage from "./routes/SignUp";
import ProtectedLayout from "./layouts/protected";
import LoginPage from "./routes/LoginPage";
import { Provider } from "react-redux";
import { store } from "./app/store";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ProtectedLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
