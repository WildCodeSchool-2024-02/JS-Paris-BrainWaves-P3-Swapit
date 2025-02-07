import "./AllProducts.css";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function AllProducts({ data }) {
  const navigate = useNavigate();

  const profilPagesDirection = () => {
    navigate(`/profile/${data.user_id}`);
  };
  return (
    <div className="blocProductForAllProducts">
      <div className="blocProfile">
        <div className="pictureProfileContainer">
          <img
            src={data.picture}
            className="pictureProfile"
            alt="profile"
            onClick={profilPagesDirection}
            role="presentation"
          />
        </div>
        <p
          className="pseudoForAllProducts"
          onClick={profilPagesDirection}
          role="presentation"
        >
          {data.pseudo}
        </p>
      </div>
      <Link
        to={`/produit/${data.item_id}`}
        className="linkAllProducts"
        key={data.id}
      >
        <div className="imgContainerForAllProducts">
          <img
            src={data.image_url}
            className="pictureProductForAllProducts"
            alt="product"
          />
        </div>
        <div className="productInformationForAllProducts">
          <p className="productNameForAllProducts">{data.name}</p>
          <p className="categoryProductForAllProducts">{data.category_name}</p>
          <p className="conditionProductForAllProducts">{data.conditions}</p>
        </div>
      </Link>
    </div>
  );
}

AllProducts.propTypes = {
  data: PropTypes.shape({
    image_url: PropTypes.string,
    category_name: PropTypes.string,
    name: PropTypes.string,
    pseudo: PropTypes.string,
    conditions: PropTypes.string,
    picture: PropTypes.string,
    item: PropTypes.string,
    id: PropTypes.string,
    item_id: PropTypes.string,
    user_id: PropTypes.number,
  }).isRequired,
};

export default AllProducts;
