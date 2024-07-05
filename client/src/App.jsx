import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  const [auth, setAuth] = useState({isLogged: false, user: null, token: null});

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <NavBar auth={auth} setAuth={setAuth}/>

      <Outlet context={{auth, setAuth}} />
      
      <Footer />
    </>
  );
}

export default App;
