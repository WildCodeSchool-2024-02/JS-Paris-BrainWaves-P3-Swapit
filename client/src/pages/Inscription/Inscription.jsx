import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Inscription.css";

function Inscription() {
  const pseudo = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const phone = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          confirmPassword: confirmPassword.current.value,
          phone: phone.current.value,
        })
      });
      
      if (response.ok) {
        toast.success("Votre inscription à bien été prise en compte !");
        navigate("/connexion");
      } else {
        const errors = await response.json();
        errors.details.forEach(error => {
          toast.warn(error.message);
        });
      }
    } catch (error) {
      toast.error('Une erreur est survenue..')
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
        id="password"
          placeholder="Mot de Passe"
          type="password"
          ref={password}
          required
        />
      </div>
      <div>
        <input className="inputForm" 
        id="confirmPassword"
          placeholder="Confirmer Mot de Passe"
          type="password"
          ref={confirmPassword}
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
