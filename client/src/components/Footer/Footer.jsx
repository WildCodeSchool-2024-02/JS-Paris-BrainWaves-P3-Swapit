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
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="wave"
      >
        <path
          fill="#f7F7F7"
          fillOpacity="1"
          d="M0,256L80,234.7C160,213,320,171,480,176C640,181,800,235,960,250.7C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>

      <div className="containerFooter">
        <div className="column1">
          <p className="avis">Avis Clients&nbsp;:</p>
          <p className="avisP1">Marc L.</p>
          <p className="avisP1">Note : ⭐⭐⭐⭐⭐</p>
          <p className="avisP1">Avis :</p>
          <p className="avisP2">
            J&rsquo;adore swapit ! C&rsquo;est tellement facile de trouver ce
            dont j&rsquo;ai besoin et de me débarrasser de ce que je
            n&rsquo;utilise plus.
          </p>
          <div className="avis2">
            <p className="avisP1">Julie</p>
            <p className="avisP1">Note : ⭐⭐⭐⭐⭐</p>
            <p className="avisP1">Avis :</p>
            <p className="avisP2">
              Grâce à Swap It, j&rsquo;ai pu échanger des objets dont je
              n&rsquo;avais plus l&rsquo;usage contre des articles très utiles.
              Une expérience vraiment satisfaisante !
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
        <p className="swapitTag">© Swapit | 2024</p>
      </div>
    </>
  );
}

export default Footer;
