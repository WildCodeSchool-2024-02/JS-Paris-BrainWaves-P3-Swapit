import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import Connexion from "./pages/Connexion/Connexion";
import Inscription from "./pages/Inscription/Inscription";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/ProductPage";
import Profil from "./pages/Profile/Profil";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },

      {
        path: "/connexion",
        element: <Connexion />,
      },

      {
        path: "/inscription",
        element: <Inscription />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({params}) => fetch(`http://localhost:3310/api/categories/${params.id}/items`)
      },

      {
        path: "/produit",
        element: <Product />,
      },
      {
        path: "/profile",
        element: <Profil />,
      },
    ],
  },
]);

export default router;
