import "./LatestProduct.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


function LatestProduct({data}) {

  const navigate = useNavigate();

  const profilPagesDirection = () => {
    navigate(`/profile/${data.pseudo}/${data.user_id}`);
  }
  
    return (
        <div className="blocProduct">
          <div className="blocProfile">
            <div className="pictureProfileContainer">
              <img src={data.picture} className="pictureProfile" alt="profile" role="presentation" onClick={profilPagesDirection} />
              </div>
            <p className="pseudo">{data.pseudo}</p>
          </div>
          <div className="imgContainer">
            <img src={data.image_url} className="pictureProduct" alt="product" />
          </div>
          <p className="productName">{data.name}</p>
          <p className="conditionProduct">{data.conditions}</p>
          <p className="location">{data.location}, France</p>
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
          user_id: PropTypes.number,
        }).isRequired,
      };
      
    export default LatestProduct;