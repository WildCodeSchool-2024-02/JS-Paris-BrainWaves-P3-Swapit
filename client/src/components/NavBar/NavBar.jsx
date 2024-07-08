import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import logo from "../../assets/navbar/logo2.svg";
import user from "../../assets/navbar/user2.svg";
import SearchBar from "../SearchBar/SearchBar";
import CategoriesNavBar from "../CategoriesNavBar/CategoriesNavBar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function NavBar({ auth, setAuth }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
  const navigate = useNavigate();

  const logout = () => {
    setAuth({isLogged: false, user: null, token: null });
    navigate("/");
  }

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 769);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const handleUserClick = () => {
    navigate("/connexion");
  };

  const homePageDirection = () => {
    navigate("/");
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

 

  return (
    <>
      <div className="containerNavBar">
        <BurgerMenu auth={auth} setAuth={setAuth} />
        <img
          src={logo}
          className="logo"
          alt="logo"
          onClick={homePageDirection}
          role="presentation"
        />
        <div className="instruction-presentation">
          <p className="instruction">Mode&nbsp;d&rsquo;Emploi</p>
          <p className="presentation">Qui&nbsp;sommes&#8209;nous&nbsp;?</p>
        </div>
        {isDesktop && <SearchBar />}
        {!auth.isLogged ? (
          <button
            type="button"
            onClick={handleUserClick}
            className="user-button"
          >
            <img src={user} className="user" alt="user" />
          </button>
        ) : (
          <>
            <button type="button" className="user-button" aria-describedby={id} onClick={handleClick} >
              <img
                src={auth.user.picture}
                className="pictureProfileConnected"
                alt="user"
              />
            </button>
            <Popover className="popoverContainer"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2}}><button type="button" className ="buttonLogout" onClick={logout} >Se deconnecter</button></Typography>
        
      </Popover>

            </>
          
        )}
      </div>
      {!isDesktop && <SearchBar />}
      <CategoriesNavBar />
    </>
  );
}

NavBar.propTypes = {
  
  auth: PropTypes.shape({
    isLogged: PropTypes.bool,
    user: PropTypes.shape({
      picture: PropTypes.string,
    }),
  }).isRequired,
  setAuth: PropTypes.func.isRequired,
  
};

export default NavBar;
