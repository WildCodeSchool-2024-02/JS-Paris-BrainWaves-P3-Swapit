import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
