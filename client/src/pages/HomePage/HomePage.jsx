import "./HomePage.css";
import { useLoaderData } from "react-router-dom";
import Instruction from "../../components/Instruction/Instruction";
import banner from "../../assets/images/banner.svg";
import LatestProduct from "../../components/LatestProduct/LatestProduct";

function HomePage() {
  const latestitems = useLoaderData();

  return (
    <>
      <img
        src={banner}
        alt="banner Swap It avec slogan Donner une seconde vie à vos gadgets"
        className="bannerForHomePage"
      />
      <h1 className="latestTitleForHomePage">Ajouts récents</h1>

      <div className="latestProductContainerForHomePage">
        {latestitems.slice(0,6).map((item) => (
          <LatestProduct key={item.id} data={item} />
        ))}
      </div>
      <div className="operationForHomePage">
        <Instruction />
      </div>
    </>
  );
}

export default HomePage;
