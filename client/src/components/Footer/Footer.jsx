import "./Footer.css";
import we from "../../assets/footer/we-grey.svg";
import gH from "../../assets/footer/good-housekeeping.svg";
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
          Swap It est génial ! J&rsquo;ai pu échanger des articles inutilisés
          contre des objets dont j&rsquo;avais besoin. Très satisfait !
        </p>
        <p className="avisP1">Julie</p>
        <p className="avisP1">Note : ⭐⭐⭐⭐⭐</p>
        <p className="avisP1">Avis :</p>
        <p className="avisP2">
          Swap It est génial ! J&rsquo;ai pu échanger des articles inutilisés
          contre des objets dont j&rsquo;avais besoin. Très satisfait !
        </p>
      </div>
      <div className="column2">
        <p className="avis">Ils parlent de nous&nbsp;!</p>
        <img src={we} className="we" alt="logo We Demain" />
        <img src={gH} className="gh" alt="logo Good Housekeeping" />
        <img src={tR} className="tr" alt="logo Techradar" />
      </div>

      <div className="column3">
        <p className="avis">Coming Soon</p>
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
