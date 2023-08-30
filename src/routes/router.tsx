import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import IssueList from "../components/domain/IssueList";
import IssueDetail from "../components/domain/IssueDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
