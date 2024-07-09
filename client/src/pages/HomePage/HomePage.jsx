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
        className="banner"
      />
      <h1 className="latestTitle">Ajouts récents</h1>

      <div className="latestProductContainer">
        {latestitems.slice(0,6).map((item) => (
          <LatestProduct key={item.id} data={item} />
        ))}
      </div>
      <div className="operation">
        <Instruction />
      </div>
    </>
  );
}

export default HomePage;
