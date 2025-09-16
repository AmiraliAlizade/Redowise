import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

import LoadingPage from "./pages/LoadingPage.jsx";
import StartPage from "./pages/StartPage.jsx";
import VerifySignInPage from "./pages/VerifySignInPage.jsx";
import VerifySignUpPage from "./pages/VerifySignUpPage.jsx";
import PasswordLoginPage from "./pages/PasswordLoginPage.jsx";

import { Provider } from "react-redux";
import ChatPage from "./pages/ChatPage.jsx";
import CreateProfilePage from "./pages/CreateProfilePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistor,store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
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
  { path: "login", element: <LoginPage /> },
  { path: "signUp", element: <SignUpPage /> },
  { path: "verifySignIn", element: <VerifySignInPage /> },
  { path: "verifySignUp", element: <VerifySignUpPage /> },
  { path: "passwordLogin", element: <PasswordLoginPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
