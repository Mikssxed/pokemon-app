import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateTeam from "./pages/CreateTeam";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "createTeam", element: <CreateTeam /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
