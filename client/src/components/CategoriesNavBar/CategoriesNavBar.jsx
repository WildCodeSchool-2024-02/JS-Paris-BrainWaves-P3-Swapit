import "./CategoriesNavBar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CategoriesNavBar() {
  const [dataCategories, setDataCategories] = useState([]);

  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  const handleAllProductsClick = () => {
    navigate("/category/all-products");
  };

  useEffect(() => {
    const fetchDataCategories = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/categories/");
        const receptionData = await response.json();
        setDataCategories(receptionData);
      } catch (error) {
        console.error("Error fetching dataCategories", error);
      }
    };
    fetchDataCategories();
  }, []);

  return (
    <div>
      <div className="categoriesContainerNavBar">
        <div
          className="allProduct"
          onClick={handleAllProductsClick}
          role="presentation"
        >
          Tous&nbsp;les&nbsp;produits
        </div>
        <div className="categoriesNavBar">
          {dataCategories.map((dataCategory) => (
            <p
              key={dataCategory.category_id}
              className="href"
              role="presentation"
              onClick={() => handleCategoryClick(dataCategory.category_id)}
            >
              {dataCategory.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesNavBar;
