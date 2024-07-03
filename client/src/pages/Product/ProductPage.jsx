
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ProductPage.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwapProposition from "../../components/swapProposition/swapProposition";

export default function ProductPage() {
  const [product, setProduct] = useState([]);
  const [openSwapRequest, setOpenSwapRequest] = useState(false);
  const navigate = useNavigate();
  const [blur, setBlur] = useState(false);

  const handleSwapClick = () => {
    navigate(`/profile`);
  };

  useEffect(() => {
    fetch("http://localhost:3310/api/items/7/user")
      .then((response) => response.json())
      .then((json) => setProduct(json[0]));
  }, []);

  // eslint-disable-next-line no-console
  console.log(product);

  const handleSwapRequest = () => {
    setBlur(true);
    setOpenSwapRequest(true);
    document.body.classList.add("active");
  };

  const closeSwapRequest = () => {
    setBlur(false);
    setOpenSwapRequest(false);
    document.body.classList.remove("active");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(product.date_added).toLocaleDateString();

  return (
    <>
      {blur && <div className="blurEffect" />}

      <div className="all">
        <div className="allSwiper">
          <Swiper
            cssMode
            navigation
            pagination
            mousewheel
            keyboard
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={product.image_url}
                alt="Main product"
                className="mainImage"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={product.image_url}
                alt="Main product"
                className="mainImage"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={product.image_url}
                alt="Main product"
                className="mainImage"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={product.image_url}
                alt="Main product"
                className="mainImage"
              />
            </SwiperSlide>
          </Swiper>

          <div className="swapBtn">
            <button
              className="swapButton"
              type="button"
              onClick={handleSwapRequest}
            >
              Proposer un SWAP
            </button>
          </div>
          <div className="swapProposition">
            {openSwapRequest && (
              <SwapProposition
                closeProposition={closeSwapRequest}
                setBlur={setBlur}
              />
            )}
          </div>
        </div>

        <div className="productPage">
          <div className="productDetails">
            <div className="profile">
              <img
                onClick={handleSwapClick}
                type="image"
                src={product.picture}
                alt="ProfilePicture"
                className="profileImage"
                role="presentation"
              />
              <div className="profileInfo">
                <h2
                  className="pseudo"
                  onClick={handleSwapClick}
                  role="presentation"
                >
                  {product.pseudo}
                </h2>
                <p>{product.location}</p>
                <div className="date">Ajouté le {formattedDate}</div>
              </div>
            </div>

            <div className="name">
              <h2 id="title">{product.name}</h2>
            </div>
            <hr />

            <div className="description">
              <h4>Description</h4>
              <p>{product.description}</p>
            </div>
            <hr />
            <div className="condition">
              <h4>État</h4>
              <p>{product.condition}</p>
            </div>
            <hr />

            <div className="category">
              <h4>Catégorie</h4>
              <p>{product.category_name}</p>
            </div>
            <hr />
            <div className="swapRequest">
              <h4>Échange souhaité</h4>
              <p>{product.swap_request}</p>
            </div>

            <div className="swapBtnMobile">
              <button
                className="swapButton"
                type="button"
                onClick={handleSwapRequest}
              >
                Proposer un SWAP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
