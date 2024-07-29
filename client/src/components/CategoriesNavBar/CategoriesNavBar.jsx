import "./CategoriesNavBar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CategoriesNavBar() {
  const [dataCategories, setDataCategories] = useState([]);

  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/categorie/${categoryId}`);
  };

  const handleAllProductsClick = () => {
    navigate("/categorie/produits");
  };

  useEffect(() => {
    const fetchDataCategories = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/categories/`
        );
        const receptionData = await response.json();
        setDataCategories(receptionData);
      } catch (error) {
        console.error("Error fetching dataCategories", error);
      }
    };
    fetchDataCategories();
  }, []);

  return (
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
            {dataCategory.category_name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default CategoriesNavBar;
