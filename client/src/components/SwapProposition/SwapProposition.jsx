import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import "./swapProposition.css";
import Checkbox from "@mui/material/Checkbox";

function SwapProposition({ closeProposition, setBlur, dataUserReceiver }) {
  const [productList, setProductList] = useState([]);
  const [checked, setChecked] = useState([]);
  const [dataOfferProduct, setdataOfferProduct] = useState(null);
  const { auth } = useOutletContext();


  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/exchanges`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            item_id: dataUserReceiver.item_id,
            itemTwo_id: dataOfferProduct.item_id,
            receiver_id : dataUserReceiver.user_id,
          }),
        }
      );

      if (response.ok) {
        toast.success(
          `Votre proposition a bien été envoyé à ${dataUserReceiver.pseudo} !`
        );
      } else {
        const errors = await response.json();
        errors.details.forEach((error) => {
          toast.warn(error.message);
        });
      }
    } catch (error) {
      toast.error("Vous avez déjà proposé un swap sur ce produit");
    }
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${auth.user.user_id}/items`)
      .then((response) => response.json())
      .then((json) => {
        setProductList(json);
        setChecked(new Array(json.length).fill(false));
      });
  }, [auth.user.user_id]);

  const handleChange = (index) => () => {
    const newChecked = checked.map((item, i) => (i === index ? !item : false));
    setChecked(newChecked);

    if (!newChecked[index]) {
      setdataOfferProduct(null);
    } else {
      setdataOfferProduct(productList[index]);
    }
  };

  const handleSwapRequest = () => {
    closeProposition(false);
    setBlur(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="proposition">
      <div className="content">
        <div className="btnProposition">
          <button
            className="btnClose"
            type="button"
            onClick={handleSwapRequest}
          >
            Annuler la proposition
          </button>

          <button onClick={handleSubmit} className="btnSend" type="button">
            Envoyer la proposition
          </button>
        </div>

        <div className="propositionProducts">
          {productList.map((product, index) => (
            <div key={product.id} className="pProduct">
              <label htmlFor={`checkBox${index}`}>
                <div className="top">
                  <Checkbox
                    id={`checkBox${index}`}
                    sx={{
                      "&.Mui-checked": {
                        color: `#00c3e3`,
                      },
                    }}
                    checked={checked[index]}
                    onChange={handleChange(index)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <h3 className="nameBox">{product.name}</h3>
                </div>
                <div className="productImgContainer">
                  <img
                    src={product.image_url}
                    alt="Main product"
                    className="mainImgProposition"
                  />
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
SwapProposition.propTypes = {
  dataUserReceiver: PropTypes.func.isRequired,
  closeProposition: PropTypes.func.isRequired,
  setBlur: PropTypes.func.isRequired,
};

export default SwapProposition;
