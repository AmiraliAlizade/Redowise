import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import SignInPage from "./pages/SignInPage.jsx";
import authReducer from "../src/redux/authSlice.js";
import LoadingPage from "./pages/LoadingPage.jsx";
import StartPage from "./pages/StartPage.jsx";
import VerifySignInPage from "./pages/VerifySignInPage.jsx";
import VerifySignUpPage from "./pages/VerifySignUpPage.jsx";
import PasswordLoginPage from "./pages/PasswordLoginPage.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ChatPage from "./pages/ChatPage.jsx";
import CreateProfilePage from "./pages/CreateProfilePage.jsx";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const router = createBrowserRouter([
  {
    path: "/app",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
  {
    path: "/",
    element: <LoadingPage />,
  },
  {
    path: "start",
    element: <StartPage />,
  },

  { path: "chat", element: <ChatPage /> },
  { path: "createProfile", element: <CreateProfilePage /> },
  { path: "signIn", element: <SignInPage /> },
  { path: "verifySignIn", element: <VerifySignInPage /> },
  { path: "verifySignUp", element: <VerifySignUpPage /> },
  { path: "passwordLogin", element: <PasswordLoginPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
