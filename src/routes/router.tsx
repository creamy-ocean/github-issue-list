import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import IssueList from "../components/domain/IssueList";
import IssueDetail from "../components/domain/IssueDetail";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IssueList />,
      },
      {
        path: "/:no",
        element: <IssueDetail />,
      },
    ],
  },
]);

export default router;
