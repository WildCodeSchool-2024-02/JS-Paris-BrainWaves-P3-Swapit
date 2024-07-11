import { useLoaderData } from "react-router-dom";
import "./Category.css";
import ProductsByCategory from "../../components/ProductByCategory/ProductsByCategory";

function Category() {
  const products = useLoaderData();

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category_name)),
  ];

  return (
    <div>
      {products.length === 0 ? (
        <p className="excuseByCategory">
          Désolé, il n'y a pas de produits actuellement pour cette catégorie.
        </p>
      ) : (
        uniqueCategories.map((categoryName) => (
          <div key={categoryName}>
            <h1 className="categoryNameByCategory">{categoryName}</h1>

            <div className="productContainerByCategory">
              {products.map((product) => (
                <ProductsByCategory key={product.id} data={product} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Category;
