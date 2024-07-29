import "./ProductsByCategory.css";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function ProductByCategory({ data }) {
  const navigate = useNavigate();

  const profilPagesDirection = () => {
    navigate(`/profile/${data.user_id}`);
  };
  return (
    <div className="blocProductByCategory">
      <div className="blocProfileByCategory">
        <div className="imageProfileContainerByCategory">
          <img
            src={data.picture}
            className="pictureProfileByCategory"
            alt="profile"
            onClick={profilPagesDirection}
            role="presentation"
          />
        </div>
        <p
          className="pseudoByCategory"
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
        <div className="imgContainerByCategory">
          <img
            src={data.image_url}
            className="productPictureByCategory"
            alt="product"
          />
        </div>
        
        <div className="descByCategory">
        <p className="productNameByCategory">{data.name}</p>
     
      <p className="conditionProductByCategory">{data.conditions}</p>
      </div>
      </Link>
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
    user_id: PropTypes.number,
  }).isRequired,
};

export default ProductByCategory;
