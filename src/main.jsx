import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import LoadingPage from "./pages/LoadingPage.jsx";
const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/",
    element: <LoadingPage />,
  },
  { path: "signUp", element: <SignUpPage /> },
  { path: "signIn", element: <SignInPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
