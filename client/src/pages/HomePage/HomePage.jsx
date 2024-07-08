import "./HomePage.css";
import Instruction from "../../components/Instruction/Instruction";
import banner from "../../assets/images/banner.svg";

function HomePage() {
  return (
    <>
      <img src={banner} alt="banner Swap It avec slogan Donner" />
      <div className="operation">
        <Instruction />
      </div>
    </>
  );
}

export default HomePage;
