import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Homepage";
import Adoption from "./pages/Adoption";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/adoption",
      element: <Adoption />,
    },
   
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}