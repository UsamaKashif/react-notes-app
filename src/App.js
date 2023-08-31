import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import NotePage from "./pages/NotePage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />
  },
  {
    path: "/notes/:id",
    element: <NotePage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;