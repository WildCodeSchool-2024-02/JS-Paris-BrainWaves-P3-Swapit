import { useLoaderData, useLocation } from "react-router-dom";
import AllProducts from "../../components/AllProducts/AllProducts";

import "./CategoryAllProducts.css";

function CategoryAllProducts() {
  const location = useLocation();
  const everyProduct = useLoaderData();

  const filteredProducts = location.state?.filteredDataItems || everyProduct;

  return (
    <div className="productContainerForAllProducts">
      {filteredProducts.map((item) => (
        <AllProducts key={item.id} data={item} />
      ))}
    </div>
  );
}

export default CategoryAllProducts;
