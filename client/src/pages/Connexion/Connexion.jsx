import { useRef, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import "./Connexion.css";

function Connexion() {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const { setAuth } = useOutletContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleSubmitConnect = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
          }),
          credentials: "include"
        }
      );
      if (response.ok) {
        const { user, token } = await response.json();
        setAuth({ isLogged: true, user, token });
        navigate("/");
      } else toast.warn("identifiant incorrect");
    } catch (error) {
      toast.error("Un probleme est survenue.");
    }
  };
  return (
    <section className="sectionFormConnect">
      <h2 className="titleConnect"> Bonjour ! </h2>
      <h3 className="messageConnect">
        {" "}
        Connectez-vous pour accéder à notre réseau de swapper !{" "}
      </h3>
      <div className="formConnect">
        <div>
          <input
            className="inputFormConnect"
            placeholder="Adresse Email"
            type="email"
            ref={email}
            required
          />
        </div>
        <div>
          <input
            className="inputFormConnect"
            placeholder="Mot de Passe"
            type="password"
            ref={password}
            required
          />
        </div>

        <button
          className="buttonSubmitConnect"
          type="submit"
          onClick={handleSubmitConnect}
        >
          Connexion
        </button>
        <p className="messageRegister">
          Envie de nous rejoindre ? <br className="up" />{" "}
          <button
            type="button"
            className="createAccount"
            onClick={() => navigate("/inscription")}
          >
            créer un compte
          </button>{" "}
        </p>
      </div>
    </section>
  );
}

export default Connexion;
