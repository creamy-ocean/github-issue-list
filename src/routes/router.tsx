import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import IssueList from "../components/domain/IssueList";
import IssueDetail from "../components/domain/IssueDetail";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/issues",
        element: <IssueList />,
      },
      {
        path: "/issues/:id",
        element: <IssueDetail />,
      },
    ],
  },
]);

export default router;
