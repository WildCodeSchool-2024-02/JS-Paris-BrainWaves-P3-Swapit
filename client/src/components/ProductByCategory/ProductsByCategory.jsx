import "./ProductsByCategory.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductByCategory({ data }) {
  return (
    <div className="blocProductByCategory">
      <div className="blocProfileByCategory">
        <div className="imageProfileContainerByCategory">
          <img
            src={data.picture}
            className="pictureProfileByCategory"
            alt="profile"
          />
        </div>
        <p className="pseudoByCategory">{data.pseudo}</p>
      </div>
      <Link
        to={`/produit/${data.item_id}`}
        className="linkAllProducts"
        key={data.id}
      >
        <div className="imgContainerByCategory">
          <img
            src={data.image_url}
            className="productPictureByCategory"
            alt="product"
          />
        </div>
        <p className="productNameByCategory">{data.name}</p>
      </Link>
      <p className="conditionProductByCategory">{data.conditions}</p>
    </div>
  );
}

ProductByCategory.propTypes = {
  data: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
    pseudo: PropTypes.string,
    conditions: PropTypes.string,
    picture: PropTypes.string,
    item_id: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductByCategory;
