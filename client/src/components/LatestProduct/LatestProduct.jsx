import "./LatestProduct.css";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";


function LatestProduct({ data }) {

  const navigate = useNavigate();

  const profilPagesDirection = () => {
    navigate(`/profile/${data.user_id}`);

  }
  return (
    <div className="blocProductByLatestProduct">
      <div className="blocProfileByLatestProduct">
        <div className="pictureProfileContainerByLatestProduct">
          <img
            src={data.picture}
            className="pictureProfileByLatestProduct"
            alt="profile"
            role="presentation" 
            onClick={profilPagesDirection}
          />
        </div>
        <p className="pseudoByLatestProduct">{data.pseudo}</p>
      </div>
      <Link
        to={`/produit/${data.item_id}`}
        key={data.id}
        className="linkProductHomePage"
      >
        <div className="imgContainerByLatestProduct">
          <img
            src={data.image_url}
            className="pictureProductByLatestProduct"
            alt="product"
          />
        </div>
        <p className="productNameByLatestProduct">{data.name}</p>
      </Link>

      <p className="conditionProductByLatestProduct">{data.conditions}</p>
      <p className="locationByLatestProduct">{data.location}, France</p>
    </div>
  );
}

LatestProduct.propTypes = {
  data: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
    pseudo: PropTypes.string,
    conditions: PropTypes.string,
    picture: PropTypes.string,
    location: PropTypes.string,
    item_id: PropTypes.string,
    id: PropTypes.string,
    user_id: PropTypes.number,
  }).isRequired,
};

export default LatestProduct;
