import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./swapProposition.css";
import Checkbox from "@mui/material/Checkbox";

function SwapProposition({ closeProposition, setBlur }) {
  const [productList, setProductList] = useState([]);
  const [checked, setChecked] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${id}/items`)
      .then((response) => response.json())
      .then((json) => {
        setProductList(json);
        setChecked(new Array(json.length).fill(false));
      });
  }, [id]);

  const handleChange = (index) => () => {
    const newChecked = checked.map((item, i) => (i === index ? !item : false));
    setChecked(newChecked);
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
