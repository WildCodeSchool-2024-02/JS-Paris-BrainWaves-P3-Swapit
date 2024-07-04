import { useLoaderData, useLocation } from "react-router-dom";
import AllProducts from "../../components/AllProducts/AllProducts";

import "./Category.css";

function CategoryAllProducts() {
  const location = useLocation();
  const everyProduct = useLoaderData();

  const filteredProducts = location.state?.filteredDataItems || everyProduct;


  return (
    <div>
      <div className="productContainer">
        {filteredProducts.map((item) => (
          <AllProducts key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryAllProducts;
