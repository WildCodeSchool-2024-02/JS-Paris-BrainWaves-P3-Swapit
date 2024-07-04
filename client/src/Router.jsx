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
          fetch(`http://localhost:3310/api/categories/${params.id}/items`),
      },
      {
        path: "/categorie/produits",
        element: <CategoryAllProducts />,
        loader: () => fetch(`http://localhost:3310/api/items/all`),
      },

      {
        path: "/produit",
        element: <Product />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
