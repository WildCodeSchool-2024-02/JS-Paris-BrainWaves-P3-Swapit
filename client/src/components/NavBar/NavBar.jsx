import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/navbar/logo2.svg";
import user from "../../assets/navbar/user2.svg";
import SearchBar from "../SearchBar/SearchBar";
import CategoriesNavBar from "../CategoriesNavBar/CategoriesNavBar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";


function NavBar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
  const navigate = useNavigate()

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 769);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const handleUserClick = () => {
    navigate('/connexion');
  };

  return (
    <div>
      <div className="containerNavBar">
        <BurgerMenu />
        <img src={logo} className="logo" alt="logo"/>
        <div className="instruction-presentation">
          <p className="instruction">Mode&nbsp;d&rsquo;Emploi</p>
          <p className="presentation">Qui&nbsp;sommes&#8209;nous&nbsp;?</p>
        </div>
        {isDesktop && <SearchBar />}
        <button type="button" onClick={handleUserClick} className="user-button">
          <img src={user} className="user" alt="user" />
        </button>
      </div>
      {!isDesktop && <SearchBar />}
      <CategoriesNavBar />
    </div>
  );
}

export default NavBar;
