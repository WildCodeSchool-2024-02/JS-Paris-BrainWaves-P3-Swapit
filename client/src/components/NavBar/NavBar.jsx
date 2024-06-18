import { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/navbar/logo2.svg";
import user from "../../assets/navbar/user.png";
import SearchBar from "../SearchBar/SearchBar";
import CategoriesNavBar from "../CategoriesNavBar/CategoriesNavBar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";


function NavBar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 769);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

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
        <img src={user} className="user" alt="logo" />
      </div>
      {!isDesktop && <SearchBar />}
      <CategoriesNavBar />
    </div>
  );
}

export default NavBar;
