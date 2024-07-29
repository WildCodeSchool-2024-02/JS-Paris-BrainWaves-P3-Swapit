import { useLoaderData, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AllProducts from "../../components/AllProducts/AllProducts";

import "./CategoryAllProducts.css";

function CategoryAllProducts() {
  const location = useLocation();
  const everyProduct = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const filteredProducts = location.state?.filteredDataItems || everyProduct;

  return ( 
    <>
    <h1 className="allProductName">Tous les produits</h1>
    <div className="productContainerForAllProducts">
      {filteredProducts.map((item) => (
        <AllProducts key={item.id} data={item} />
      ))}
    </div>
    </>
  );
}

export default CategoryAllProducts;
