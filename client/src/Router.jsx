import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import Connexion from "./pages/Connexion/Connexion";
import Inscription from "./pages/Inscription/Inscription";
import Category from "./pages/Category/Category";
import CategoryAllProducts from "./pages/Category/CategoryAllProducts";
import Product from "./pages/Product/ProductPage";
import Profile from "./pages/Profile/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/items/latest`),
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
        path: "/categorie",
        element: <Category />,
      },
      {
        path: "/categorie/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_URL}/categories/${params.id}/items`
          ),
      },
      {
        path: "/categorie/produits",
        element: <CategoryAllProducts />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/items/all`),
      },

      {
        path: "/produit",
        element: <Product />,
      },
      {
        path: "/profile/:name/:id",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
