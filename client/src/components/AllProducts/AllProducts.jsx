import "./AllProducts.css";
import PropTypes from "prop-types";

function AllProducts({ data }) {
  return (
    <div className="blocProduct">
      <div className="blocProfile">
        <div className="pictureProfileContainer">
          <img src={data.picture} className="pictureProfile" alt="profile" />
        </div>
        <p className="pseudo">{data.pseudo}</p>
      </div>
      <div className="imgContainer">
        <img src={data.image_url} className="pictureProduct" alt="product" />
      </div>
      <div className="productInformation">
      <p className="productName">{data.name}</p>
      <p className="categoryProduct">{data.category_name}</p>
      <p className="conditionProduct">{data.conditions}</p>
      </div>
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
  }).isRequired,
};

export default AllProducts;
