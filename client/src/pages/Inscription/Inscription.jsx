import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Inscription.css";

function Inscription() {
  const pseudo = useRef();
  const email = useRef();
  const password = useRef();
  const phone = useRef();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pseudo: pseudo.current.value,
          email: email.current.value,
          password: password.current.value,
          phone: phone.current.value,
        })
      });
      
      if (response.ok) {
        navigate("/connexion");
      } else {
        console.error("Erreur client.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="sectionForm">
     <h2 className="titleRegister"> Inscription </h2>
      <div className="form">
      
      <div>
        <input className="inputForm" placeholder="Pseudo" type="text" ref={pseudo} required />
      </div>
      <div>
        <input className="inputForm" placeholder="Adresse Email" type="email" ref={email} required />
      </div>
      <div>
        <input className="inputForm" 
          placeholder="Mot de Passe"
          type="password"
          ref={password}
          required
        />
      </div>
      <div>
        <input className="inputForm" 
          placeholder="Numero de téléphone"
          type="tel"
          ref={phone}
          required
        />
      </div>
      <button className="buttonSubmit" type="submit" onClick={handleSubmit}>
        Confirmation
      </button>
      </div>
    </section>
  );
}

export default Inscription;
