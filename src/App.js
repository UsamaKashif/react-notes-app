import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import NotePage from "./pages/NotePage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout";





function App() {

  return (
    <RouterProvider router={router} />
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/notes",
        element: <HomePage />,
      },
      {
        path: "/notes/:id",
        element: <NotePage />,
      }
    ],
    errorElement: <NotFound />
  }
]);

export default App;