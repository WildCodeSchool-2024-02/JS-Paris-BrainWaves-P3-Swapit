/* eslint-disable import/no-unresolved */
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import modedemploi1 from "../../assets/images/ModeDemploi-1.png";
import modedemploi2 from "../../assets/images/ModeDemploi-2.png";
import modedemploi3 from "../../assets/images/ModeDemploi-3.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./Instruction.css";

export default function Instruction() {
  return (
    <div>
      <Swiper
        effect="flip"
        grabCursor
        pagination
        navigation
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="upText">
            <p id="how">Mode d&rsquo;emploi</p>
          </div>
          <div className="downTextImg">
            <img className="imagesSlide" alt="image1" src={modedemploi1} />
            <div className="downText">
              <div>
                <p className="question">
                  <span className="color">Explorez</span> les trésors{" "}
                </p>
                <p className="response">
                  Commencez par explorer les produits que vous souhaitez
                  échanger en utilisant des filtres de recherche ou des
                  mots-clés pertinents pour découvrir des correspondances
                  adéquates.{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="upText">
            <p id="how">Mode d&rsquo;emploi</p>
          </div>
          <div className="downTextImg">
            <img className="imagesSlide" alt="image2" src={modedemploi2} />
            <div className="downText">
              <div>
                <p className="question">
                  <span className="color">Sélectionnez</span> avec soin
                </p>
                <p className="response">
                  Après avoir identifié un objet d'intérêt, prenez le temps
                  d'examiner les détails, les images et les informations
                  associées pour déterminer si vous souhaitez engager l'échange.{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="upText">
            <p id="how">Mode d&rsquo;emploi</p>
          </div>
          <div className="downTextImg">
            <img className="imagesSlide" alt="image3" src={modedemploi3} />
            <div className="downText">
              <div>
                <p className="question">
                  <span className="color">Finalisez</span> la transaction
                </p>
                <p className="response">
                  Enfin, déclenchez le processus d'échange en proposant votre
                  objet à la contrepartie et en discutant des modalités telles
                  que la date et le lieu de rencontre.{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
