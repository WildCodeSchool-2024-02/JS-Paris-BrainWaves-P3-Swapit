import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import "./swapProposition.css";
import Checkbox from "@mui/material/Checkbox";


function SwapProposition({ closeProposition, setBlur }) {
  const [productList, setProductList] = useState([]);
  const [checked, setChecked] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { auth } = useOutletContext();


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
      setSelectedProduct(null);
    } else {
      setSelectedProduct(productList[index]);
    }
    
  };

  // eslint-disable-next-line no-console
  console.log(selectedProduct)

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

          <button className="btnSend" type="button">
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
  closeProposition: PropTypes.func.isRequired,
  setBlur: PropTypes.func.isRequired,
};

export default SwapProposition;
