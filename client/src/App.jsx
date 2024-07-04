import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Profil from "./pages/Profile/Profil";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Profil />
      <Footer />
    </>
  );
}

export default App;
