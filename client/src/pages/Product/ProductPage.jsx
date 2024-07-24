/* eslint-disable import/no-unresolved */
import { useState, useEffect } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./productPage.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import SwapProposition from "../../components/SwapProposition/SwapProposition";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const apiUrl = import.meta.env.VITE_API_URL;

export default function ProductPage() {
  const [product, setProduct] = useState([]);
  const [openSwapRequest, setOpenSwapRequest] = useState(false);
  const navigate = useNavigate();
  const { auth } = useOutletContext();
  const [blur, setBlur] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProfile = () => {
    navigate(`/profile/${product.user_id}`);
  };


  const { id } = useParams();

  useEffect(() => {
    fetch(`${apiUrl}/items/${id}/user`)
      .then((response) => response.json())
      .then((json) => setProduct(json[0]));
  }, [id]);

  const handleSwapRequest = () => {
    if (!auth.isLogged) {
      navigate("/Connexion");
    } else {
      setBlur(true);
      setOpenSwapRequest(true);
      document.body.classList.add("active");
    }
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

  const handleDeleteProduct = () => {
    fetch(`${import.meta.env.VITE_API_URL}/items/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
  
        navigate(`/profile/${product.user_id}`)
      } else {
        console.error('Erreur lors de la suppression du produit');
      }
    })
    .catch(error => console.error(error));
  };

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
            className="swiperProduct"
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
      

           {auth.isLogged === true &&
          ((auth.user.user_id) === (product.user_id)) ? (<div className="swapBtn">
            <button
            style={{
              backgroundColor: '#E50000 ',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'darkred';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#E50000 ';
            }}
            onFocus={(e) => {
              e.currentTarget.style.backgroundColor = 'darkred';
            }}
            onBlur={(e) => {
              e.currentTarget.style.backgroundColor = '#E50000' ;
            }}
              className="swapButton"
              type="button"
              onClick={handleDeleteProduct}
            >
              Supprimer ce produit 
            </button>
          </div> 
          ):(
            <div className="swapBtn">
    <button
      className="swapButton"
      type="button"
      onClick={handleSwapRequest}
    >
      Proposer un SWAP
    </button>
  </div> 
          )}



          <div className="swapProposition">
            {openSwapRequest && (
              <SwapProposition dataUserReceiver = {product}
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
                onClick={handleProfile}
                type="image"
                src={product.picture}
                alt="ProfilePicture"
                className="profileImage"
                role="presentation"
              />
              <div className="profileInfo">
                <h2
                  className="topDetails"
                  id="pseudo"
                  onClick={handleProfile}
                  role="presentation"
                >
                  {product.pseudo}
                </h2>
                <p>{product.location}</p>
                <div className="date">Ajouté le {formattedDate}</div>
              </div>
            </div>

            <div className="name">
              <h2 className="topDetails" id="title">
                {product.name}
              </h2>
            </div>
            <hr />

            <div className="description">
              <h4 className="details">Description</h4>
              <p>{product.description}</p>
            </div>
            <hr />
            <div className="condition">
              <h4 className="details">État</h4>
              <p>{product.conditions}</p>
            </div>
            <hr />

            <div className="category">
              <h4 className="details">Catégorie</h4>
              <p>{product.category_name}</p>
            </div>
            <hr />
            <div className="swapRequest">
              <h4 className="details">Échange souhaité</h4>
              <p>{product.swap_request}</p>
            </div>
            {auth.isLogged === true &&
          ((auth.user.user_id) === (product.user_id)) ? (
            <div className="swapBtnMobile">
              <button
                          style={{
                            backgroundColor: '#E50000',
                            transition: 'background-color 0.3s ease'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = 'darkred';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#E50000 ';
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.backgroundColor = 'darkred';
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.backgroundColor = '#E50000' ;
                          }}
                className="swapButton"
                type="button"
                onClick={handleDeleteProduct}
              >
                Supprimer ce produit
              </button>
            </div>
            ):( 
            <div className="swapBtnMobile">
              <button
                className="swapButton"
                type="button"
                onClick={handleSwapRequest}
              >
                Proposer un SWAP
              </button>
            </div>

)}
            
          </div>
        </div>
      </div>
    </>
  );
  
}
