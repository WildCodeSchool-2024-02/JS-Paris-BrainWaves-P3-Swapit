import { useState, useCallback, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./Profile.css";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };

  const [alignment, setAlignment] = useState("");
  const [title, setTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productCondition, setProductCondition] = useState("");
  const [productRequest, setProductRequest] = useState("");
  const [productLocation, setProductLocation] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const [productDate] = useState(today);

  const [dataProduct, setDataProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const { id } = useParams();
  const [, setUserProfile] = useState([]);
  const { auth, setAuth } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/users/${id}`
        );
        const data = await response.json();

        setUserProfile(data);
        setFormData({
          username: data.pseudo,
          email: data.email,
          phone: data.phone,
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [id, setUserProfile]);

  useEffect(() => {
    if (alignment === "Vitrine") {
      fetch(`${import.meta.env.VITE_API_URL}/users/${id}/items`)
        .then((response) => response.json())
        .then((facts) => setDataProduct(facts));
    }
  }, [alignment, id]);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.warning("Les mots de passe ne correspondent pas");
      return;
    }

    const updatedUserData = {
      pseudo: formData.username,
      email: formData.email,
      phone: formData.phone,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
          body: JSON.stringify(updatedUserData),
        }
      );

      if (response.ok) {
        toast.success("Profil mis à jour avec succès");
        setIsModalOpen(false);
        navigate(`/profile/${id}`);
      } else {
        toast.warning("Échec de la mise à jour du profil");
      }
    } catch (error) {
      toast.error("Une erreur est survenue lors de la mise à jour du profil");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRedirectionItem = (itemId) => {
    navigate(`/produit/${itemId}`);
  };

  const handleChange = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }, []);

  const [user, setUser] = useState([]);
  const [item, setItem] = useState([]);
  const [swapProposition, setSwapProposition] = useState([]);
  const [swapReception, setSwapReception] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));

    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));

    fetch(`${import.meta.env.VITE_API_URL}/items/unapproved`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, [id]);

  useEffect(() => {
    const fetchSwapPropositions = async () => {
      try {
        const swapReponse = await fetch(
          `${import.meta.env.VITE_API_URL}/items/swap`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${auth.token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const swapData = await swapReponse.json();
        setSwapProposition(swapData);
      } catch (error) {
        console.error("Error fetching data swap propositions", error);
      }
    };
    fetchSwapPropositions();
  }, [auth.token]);

  useEffect(() => {
    const fetchSwapReceptions = async () => {
      try {
        const swapReponseReceptions = await fetch(
          `${import.meta.env.VITE_API_URL}/items/reception`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${auth.token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const swapReceptionData = await swapReponseReceptions.json();
        setSwapReception(swapReceptionData);
      } catch (error) {
        console.error("Error fetching data swap receptions", error);
      }
    };
    fetchSwapReceptions();
  }, [auth.token]);

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

  const handleRequestChange = (e) => {
    setProductRequest(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    if (alignment === "Vitrine") {
      fetch(`${import.meta.env.VITE_API_URL}/users/${id}/items`)
        .then((response) => response.json())
        .then((facts) => setDataProduct(facts));
    }
  }, [alignment, id]);

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
        toast.success("Vos modifications ont bien été prises en compte.");
      } else {
        toast.warning("Veuillez vérifier le format de vos données.");
      }
    } catch (error) {
      toast.error("Une erreur est survenue . .");
    }
  };

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
            Pas de produit pour le moment...
          </div>
        ) : (
          <div>
            <h3 className="numberOfItems">
              {dataProduct.length}{" "}
              {dataProduct.length === 1 ? "article" : "articles"}
            </h3>
            <div>
              <div className="latestProductContainerForProfilePage">
                {dataProduct.map((product) => (
                  <div
                    key={product.item_id}
                    className="blocProductForProfilePage"
                  >
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
          </div>
        );
      case "Evaluations":
        return (
          <div
            style={{
              fontSize: "24px",
              textAlign: "center",
              margin: "20px 0",
              marginBottom: "2rem",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            {" "}
            Pas d'évaluation pour le moment !
          </div>
        );
      case "Validations":
        return user.is_admin === 1 ? <div>Annonce à valider</div> : null;
      default:
        return null;
    }
  };

  const handleValidationAdProduct = async (articleId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/items/${articleId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
          body: JSON.stringify({ is_approved: true }),
        }
      );
      if (response.ok) {
        toast.success("L'article a été validé avec succès.");
        setItem((prevItems) =>
          prevItems.map((element) =>
            element.item_id === articleId
              ? { ...element, is_approved: true }
              : element
          )
        );
      } else {
        toast.warning("Échec de la validation de l'article.");
      }
    } catch (error) {
      toast.error("Une erreur est survenue lors de la validation.");
    }
  };

  const handleRefusalAdProduct = async (articleId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/items/${articleId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
          body: JSON.stringify({ is_approved: false }),
        }
      );
      if (response.ok) {
        toast.success("L'article a été refusé avec succès.");
        setItem((prevItems) =>
          prevItems.filter((element) => element.id !== articleId)
        );
      } else {
        toast.warning("Échec du refus de l'article.");
      }
    } catch (error) {
      toast.error("Une erreur est survenue lors du refus.");
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
            {user.is_admin === 1 && (
              <div className="profileAdministrator">Administrateur</div>
            )}
            <div className="Five-Rate-Active Larger">
              <p className="screenReaders">Rated {user.rating} out of 5</p>
              {[1, 2, 3, 4, 5].map((rate) => (
                <button
                  id="buttonStar"
                  key={rate}
                  type="button"
                  className={
                    rate <= user.rating ? "rate-value-full" : "rate-value-empty"
                  }
                  aria-label={`Rate ${rate} out of 5`}
                >
                  <span aria-hidden="true" />
                </button>
              ))}
            </div>
            <p className="Location">Paris, France</p>
            <p className="Subscribe">Member since January 2024</p>
            {auth.isLogged && auth.user.user_id === user.user_id && (
              <div>
                <button
                  id="buttonModif"
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                >
                  Modifications profil
                </button>
                {isModalOpen && (
                  <div className="modalProfile">
                    <span
                      className="closeBtn"
                      role="presentation"
                      onClick={() => setIsModalOpen(false)}
                    >
                      &times;
                    </span>
                    <div className="modalcontentProfile">
                      <form onSubmit={handleProfileSubmit} id="profileForm">
                        <input
                          placeholder="Pseudo"
                          type="text"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                        />
                        <input
                          placeholder="Email"
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <input
                          placeholder="Mot de passe"
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                        <input
                          placeholder="Confirmer mot de passe"
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                        />
                        <input
                          placeholder="Telephone"
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                        <input
                          placeholder="Ville"
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                        <input
                          placeholder="Code Postal"
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                        />
                        <div id="confirmationprofileBtn">
                          <button type="submit" className="confirmationBtn">
                            Confirmation
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="profileBar">
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
            {user.is_admin === 0 ? "Propositions" : "Validations"}
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="section-content">{renderSection()}</div>

      {alignment === "Vitrine" &&
        auth.isLogged === true &&
        auth.user.user_id === user.user_id && (
          <div className="blocAddProduct">
            <p className="addAProduct">Ajoutez un produit</p>

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
              <p className="addAPhoto">Ajoutez votre / vos photo(s) ici</p>
              <div
                className="photoPreview"
                role="presentation"
                onClick={triggerFileInput}
              >
                {productImage ? (
                  <img
                    src={URL.createObjectURL(productImage)}
                    alt="product"
                    style={{
                      width: "20vh",
                      height: "auto",
                    }}
                  />
                ) : (
                  "+"
                )}
              </div>
              <input
                placeholder="Entrez le titre du produit"
                id="fileInput"
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
            <p className="descriptionAddAProduct">Description&nbsp;:</p>
            <textarea
              placeholder="Ajoutez une descriptionn"
              type="text"
              value={productDescription}
              onChange={handleDescriptionChange}
              className="texteAreaDescription"
            />
            <p className="conditionAddAProduct">Condition&nbsp;:</p>
            <textarea
              placeholder="Ajoutez une Condition"
              type="text"
              value={productCondition}
              onChange={handleConditionChange}
              className="texteAreaCondition"
            />
            <div className="inputGroupAddProduct">
              <p className="locationAddAProduct">Localisation&nbsp;:</p>
              <input
                placeholder="Ajoutez une localisation"
                type="text"
                value={productLocation}
                onChange={handleLocationChange}
                className="inputLocation"
              />
            </div>

            <p className="requestAddAProduct">Echange souhaité&nbsp;:</p>
            <textarea
              placeholder="Ajoutez les échanges souhaités"
              type="text"
              value={productRequest}
              onChange={handleRequestChange}
              className="texteAreaRequest"
            />

            <div className="inputGroupAddProduct">
              <p className="categoryAddAProduct">Catégorie&nbsp;:</p>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="inputCategory"
              >
                <option value="">Sélectionnez une catégorie</option>
                {categories.map((category) => (
                  <option
                    key={category.category_id}
                    value={category.category_id}
                  >
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
      {alignment === "Propositions" &&
        auth.isLogged === true &&
        user.is_admin === 1 && (
          <>
            {item.map((article) => (
              <div key={article.id} className="productAdValidation">
                <p className="pseudoAdValidation">
                  Swaper :{" "}
                  <span className="contentPseudoAdValidation">
                    {article.pseudo}
                  </span>
                </p>
                <p className="titleAdValidation">
                  Titre :{" "}
                  <span className="contentTitleAdValidation">
                    {article.name}
                  </span>
                </p>
                <p className="categoryAdValidation">
                  Catégorie&nbsp;:{" "}
                  <span className="contentCategoryAdValidation">
                    {article.category_name}{" "}
                  </span>
                </p>
                <p>Photo(s) : </p>
                <div className="containerPhotoAdValidation">
                  <img
                    src={article.image_url}
                    alt="product representation"
                    className="photoAdValidation"
                  />
                </div>
                <p className="descriptionAdValidation">Description&nbsp;:</p>
                <p className="contentDescriptionAdValidation">
                  {article.description}
                </p>
                <p className="conditionAdValidation">
                  Condition&nbsp;:{" "}
                  <span className="contentConditionAdValidation">
                    {article.conditions}{" "}
                  </span>
                </p>
                <div className="buttonZoneAdValidation">
                  <button
                    type="button"
                    className="validationAdProduct"
                    onClick={() => handleValidationAdProduct(article.item_id)}
                  >
                    Validation
                  </button>
                  <button
                    type="button"
                    className="refusalAdProduct"
                    onClick={() => handleRefusalAdProduct(article.item_id)}
                  >
                    Refus
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      {alignment === "Propositions" &&
        auth.isLogged === true &&
        user.is_admin === 0 &&
        (swapProposition.length > 0 ? (
          <div>
            {swapProposition.map((product) => (
              <div key={product.item_id} className="productAdValidation">
                <p className="pseudoAdValidation">
                  Swap proposé par :{" "}
                  <span className="contentPseudoAdValidation">
                    {product.pseudo}
                  </span>
                </p>
                <p className="titleAdValidation">
                  Titre :{" "}
                  <span className="contentTitleAdValidation">
                    {product.name}
                  </span>
                </p>

                <p>Photo : </p>
                <div className="containerPhotoAdValidation">
                  <img
                    onClick={() => handleRedirectionItem(product.item_id)}
                    role="presentation"
                    src={product.image_url}
                    className="photoAdValidation"
                    alt="product"
                  />
                </div>

                <p className="conditionAdValidation">
                  Condition&nbsp;:{" "}
                  <span className="contentConditionAdValidation">
                    {product.conditions}{" "}
                  </span>
                </p>
                <p className="conditionAdValidation">
                  Swap contre votre&nbsp;:{" "}
                  <span className="contentConditionAdValidation">
                    {swapReception
                      .filter(
                        (productRec) =>
                          productRec.exchange_id === product.exchange_id
                      )
                      .map((productRec) => (
                        <p key={product.index}>{productRec.name}</p>
                      ))}
                  </span>
                </p>
                <div className="buttonZoneAdValidation">
                  <button
                    type="button"
                    className="validationAdProduct"
                    onClick={handleOpen}
                  >
                    Accepter
                  </button>
                  <Modal
                    id="modalSwap"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box id="modalBox" sx={style}>
                      {" "}
                      {swapProposition.map((productModal) => (
                        <div
                          className="modalContent"
                          key={productModal.item_id}
                        >
                          <h3 className="textSwap">
                            Veuillez trouver ci-dessous les coordonnées du
                            swappeur afin de convenir d'un rendez-vous :{" "}
                          </h3>

                          <p key={productModal.item_id} className="numSwap">
                            {" "}
                            <span  style={{
             fontWeight:"bold"
            }}>Téléphone:</span>  {productModal.phone}
                          </p>

                          <p key={productModal.item_id} className="mailSwap">
                            {" "}
                            <span  style={{
             fontWeight:"bold"
            }}>Email:</span> {productModal.email}
                          </p>
                        </div>
                      ))}
                    </Box>
                  </Modal>
                  <button
                    type="button"
                    className="refusalAdProduct"
                    onClick={handleClose}
                  >
                    Refuser
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p
            style={{
              fontSize: "24px",
              textAlign: "center",
              margin: "20px 0",
              marginBottom: "2rem",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            {" "}
            Vous n'avez pas de proposition de swap pour le moment ...
          </p>
        ))}
    </>
  );
}
