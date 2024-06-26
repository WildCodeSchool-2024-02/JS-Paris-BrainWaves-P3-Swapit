import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Connexion.css";

function Connexion() {
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

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
        }
      );
      if (response.status === 200) {
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
