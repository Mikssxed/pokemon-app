import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateTeam from "./pages/CreateTeam";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import CreateTeamLayout from "./pages/CreateTeamLayout";
import ManageTeam from "./pages/ManageTeam";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
