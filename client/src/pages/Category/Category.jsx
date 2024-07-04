import { useLoaderData } from "react-router-dom";
import "./Category.css";
import ProductsByCategory from "../../components/ProductByCategory/ProductsByCategory";

function Category() {
  const products = useLoaderData();

  const uniqueCategories = [
    ...new Set(products.map((product) => product.categoryName)),
  ];

  return (
    <div>
      {uniqueCategories.map((categoryName) => (
        <div key={categoryName}>
          <h1 className="categoryName">{categoryName}</h1>
          <div className="productContainer">
            {products.map((product) => (
              <ProductsByCategory key={product} data={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
