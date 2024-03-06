import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import MessagesPage from "./MessagesPage/MessagesPage";
import MessagesViewPage from "./MessagesPage/MessagesView/MessageViewPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import RedirectToMain from "./RedirectToMain";
import ErrorPage from "./ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectToMain />,
    errorElement: <ErrorPage />
  },
  {
    path: "/messages",
    element: <MessagesPage />,
    children: [
      {
        path: ":id",
        element: <MessagesViewPage />,
      },
    ],
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
