import { useState, useCallback, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Profile.css";

export default function Profile() {
  const [alignment, setAlignment] = useState("");
  const [title, setTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productCondition, setProductCondition] = useState("");
  const [productLocation, setProductLocation] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const [productDate] = useState(today);
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

    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, [id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };
  const handleConditionChange = (e) => {
    setProductCondition(e.target.value);
  };

  const handleLocationChange = (e) => {
    setProductLocation(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
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
        );

      case "Evaluations":
        return <div>Evaluations section content</div>;
      case "Propositions":
        return <div>Propositions section content</div>;
      default:
        return null;
    }
  };

  const { auth, setAuth } = useOutletContext();

  const handleSubmit = async () => {
    const form = new FormData();
    form.append("name", title);
    form.append("description", productDescription);
    form.append("conditions", productCondition);
    form.append("date_added", productDate);
    form.append("location", productLocation);
    form.append(`image_url`, productImage);
    form.append("user_id", id);
    form.append("category_id", selectedCategory);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/items`, {
        method: "POST",
        body: form,
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      if (response.ok) {
        setAuth((prevState) => ({ ...prevState, user }));
        toast.success("Vos modifications ont bien été prise en compte.");
      } else toast.warning("Veuillez verifier le format de vos données.");
    } catch (error) {
      toast.error("Une erreur est survenue . .");
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

      {alignment === "Vitrine" && (
        <div className="blocAddProduct">
          <p className="addAProduct">Ajouter un produit</p>

          <div className="inputGroupAddProduct">
            <p className="titleAddProduct">Titre&nbsp;:</p>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Entrez le titre du produit"
              className="inputTitleProd"
            />
          </div>

          <div>
            <p className="addAPhoto">Ajouter votre / vos photo(s) ici</p>
            <div
              className="photoPreview"
              role="presentation"
              onClick={triggerFileInput}
            >
              {productImage ? (
                <img
                  src={productImage}
                  alt="product"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                "+"
              )}
            </div>
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>

          <p className="descriptionAddAProduct">Description&nbsp;:</p>
          <textarea
            type="text"
            value={productDescription}
            onChange={handleDescriptionChange}
            className="texteAreaDescription"
          />

          <p className="conditionAddAProduct">Condition&nbsp;:</p>
          <textarea
            type="text"
            value={productCondition}
            onChange={handleConditionChange}
            className="texteAreaCondition"
          />

          <div className="inputGroupAddProduct">
            <p className="locationAddAProduct">Location&nbsp;:</p>
            <input
              type="text"
              value={productLocation}
              onChange={handleLocationChange}
              className="inputLocation"
            />
          </div>

          <div className="inputGroupAddProduct">
            <p className="categoryAddAProduct">Catégorie&nbsp;:</p>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="inputCategory"
            >
              <option value="">Sélectionnez une catégorie</option>
              {categories.map((category) => (
                <option key={category.category_id} value={category.category_id}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>

          <div className="buttonZone">
            <button
              type="button"
              className="validationAddAProduct"
              onClick={handleSubmit}
            >
              Validation
            </button>
          </div>
        </div>
      )}
    </>
  );
}
