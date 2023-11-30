import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateTeam from "./pages/CreateTeam/CreateTeam";
import RootLayout from "./pages/Root";
import Home from "./pages/Home/Home";
import CreateTeamLayout from "./pages/CreateTeamLayout/CreateTeamLayout";
import ManageTeam from "./pages/ManageTeam/ManageTeam";
import Battle from "./pages/Battle/Batte";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/",
        element: <CreateTeamLayout />,
        children: [
          { path: "createTeam", element: <CreateTeam /> },
          { path: "ManageTeam", element: <ManageTeam /> },
        ],
      },
      {
        path: "/Battle",
        element: <Battle />,
        children: [{ path: "fight" }, { path: "select" }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
