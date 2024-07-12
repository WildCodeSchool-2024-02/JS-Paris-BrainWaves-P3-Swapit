import { useEffect } from "react";
import "./HomePage.css";
import { useLoaderData } from "react-router-dom";
import Instruction from "../../components/Instruction/Instruction";
import Swapit from "../../assets/images/Swapit.gif";
import LatestProduct from "../../components/LatestProduct/LatestProduct";

function HomePage() {
  const latestitems = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <img
        src={Swapit}
        alt="banner Swap It avec slogan Donner une seconde vie à vos gadgets"
        className="bannerForHomePage"
      />
       <div className="operationForHomePage">
        <Instruction />
      </div>
      <h1 className="latestTitleForHomePage">Ajouts récents</h1>

      <div className="latestProductContainerForHomePage">
        {latestitems.slice(0, 6).map((item) => (
          <LatestProduct key={item.id} data={item} />
        ))}
      </div>
     
    </>
  );
}

export default HomePage;
