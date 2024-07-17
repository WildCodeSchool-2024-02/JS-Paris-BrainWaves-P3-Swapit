import "./Footer.css";
import we from "../../assets/footer/we-grey.svg";
import gH from "../../assets/footer/good-housekeeping.svg";
import info from "../../assets/footer/info.svg";
import tR from "../../assets/footer/techradar.svg";
import git from "../../assets/footer/icon _GitHub_.png";
import insta from "../../assets/footer/icon_Insta.png";
import likedin from "../../assets/footer/likedin.png";
import facebook from "../../assets/footer/facebook.png";

function Footer() {
  return (
    <div className="containerFooter">
      <div className="column1">
        <p className="avis">Avis Clients&nbsp;:</p>
        <p className="avisP1">Marc L.</p>
        <p className="avisP1">Note : ⭐⭐⭐⭐⭐</p>
        <p className="avisP1">Avis :</p>
        <p className="avisP2">
          J&rsquo;adore Swap It ! C&rsquo;est tellement facile de trouver ce
          dont j&rsquo;ai besoin et de me débarrasser de ce que je
          n&rsquo;utilise plus.
        </p>
<div className="avis2">
        <p className="avisP1">Julie</p>
        <p className="avisP1">Note : ⭐⭐⭐⭐⭐</p>
        <p className="avisP1">Avis :</p>
        <p className="avisP2">
          Grâce à Swap It, j&rsquo;ai pu échanger des objets dont je
          n&rsquo;avais plus l&rsquo;usage contre des articles très utiles. Une
          expérience vraiment satisfaisante !
        </p>
        </div>
      </div>

      <div className="column2">
        <p className="avis">Ils parlent de nous&nbsp;!</p>
        <img src={we} className="we" alt="logo We Demain" />
        <img src={gH} className="gh" alt="logo Good Housekeeping" />
        <img src={tR} className="tr" alt="logo Techradar" />
        <img src={info} className="info" alt="logo le monde info" />
      </div>

      <div className="column3">
        <p className="avis">Coming Soon...</p>
        <div className="pictos">
          <img src={git} className="git" alt="picto Github" />
          <img src={insta} className="insta" alt="picto Instagram" />
          <img src={likedin} className="linkedin" alt="picto Linkedin" />
          <img src={facebook} className="facebook" alt="picto Facebook" />
        </div>
        <p className="thanks">
          Remerciements à nos swapers présents et futurs&nbsp;!
        </p>
      </div>
    </div>
  );
}

export default Footer;
