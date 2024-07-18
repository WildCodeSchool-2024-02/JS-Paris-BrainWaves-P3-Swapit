 import { useState, useCallback, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

import "./Profile.css";

export default function Profile() {
  const [alignment, setAlignment] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [dataProduct, setDataProduct] = useState([]);

  const handleRedirectionItem = (itemId) => {
    navigate(`/produit/${itemId}`);
  };

  const handleChange = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }, []);

  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  const rating = 1.3;

  useEffect(() => {
    if (alignment === "Vitrine") {
      fetch(`${import.meta.env.VITE_API_URL}/users/${id}/items`)
        .then((response) => response.json())
        .then((facts) => setDataProduct(facts));
    }
  }, [alignment, id]);



  const renderSection = () => {
    switch (alignment) {
      case "Vitrine":
        return dataProduct.length < 1 ? (
          <div
            style={{
              fontSize: "24px",
              textAlign: "center",
              margin: "20px 0",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            {" "}
            Pas de produit pour le moment...{" "}
          </div>
        ) : (
          <div>
  
            <h3 className="numberOfItems">{dataProduct.length} {dataProduct.length === 1 ? "article" : "articles"}</h3> 
          <div className="latestProductContainerForProfilePage">
            
            {dataProduct.map((product) => (
              <div key={product.item_id} className="blocProductForProfilePage">
                <div className="blocProfilePage">
                
                  <div className="imgContainerForProfilePage">
                    <img
                      onClick={() => handleRedirectionItem(product.item_id)}
                      role="presentation"
                      src={product.image_url}
                      className="pictureProductForProfilePage"
                      alt="product"
                    />
                  </div>
                  <div className="productInformationForProfilePage">
                    <p
                      onClick={() => handleRedirectionItem(product.item_id)}
                      role="presentation"
                      className="productNameForProfilePage"
                    >
                      {product.name}
                    </p>
                    <p className="categoryProductForProfilePage">
                      {product.category_name}
                    </p>
                    <p className="conditionProductForProfilePage">
                      {product.conditions}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        );

      case "Evaluations":
        return <div>Evaluations section content</div>;
      case "Propositions":
        return <div>Propositions section content</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="profileContainer">
        <div className="profileHeader">
          <div className="profileImgContainer">
            <img src={user.picture} alt="Profile" className="profileImg" />
          </div>
          <div className="profileDetails">
            <h2>{user.pseudo}</h2>
            <div className="Five-Rate-Active Larger">
              <p className="screenReaders">Rated {rating} out of 5</p>
              {[1, 2, 3, 4, 5].map((rate) => (
                <button
                  id="buttonStar"
                  key={rate}
                  type="button"
                  className={
                    rate <= rating ? "rate-value-full" : "rate-value-empty"
                  }
                  aria-label={`Rate ${rate} out of 5`}
                >
                  <span aria-hidden="true" />
                </button>
              ))}
            </div>
            <p className="Location">Paris, France</p>
            <p className="Subscribe">Member since January 2024</p>
            <div>
              <button id="buttonModif" type="button" onClick={null}>
                Modifications profil
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton id="btn" value="Vitrine">
            Vitrine
          </ToggleButton>
          <ToggleButton id="btn" value="Evaluations">
            Evaluations
          </ToggleButton>
          <ToggleButton id="btn" value="Propositions">
            Propositions
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="section-content">{renderSection()}</div>
    </>
  );
}
