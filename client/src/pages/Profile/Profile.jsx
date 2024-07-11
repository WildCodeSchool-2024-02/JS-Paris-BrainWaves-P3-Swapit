import {  useState, useCallback, useEffect } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useParams } from 'react-router-dom';


import './Profile.css';

export default function Profile() {
  const [alignment, setAlignment] = useState('');

  const handleChange = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }, []);
  
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${id}`)
    .then(response => response.json())
    .then(data => setUser(data));
  }, [id]);

  const rating = 1.3;

  const renderSection = () => {
    switch (alignment) {
      case 'Virtine':
        return <div>Vitrine section content</div>;
      case 'Evaluations':
        return <div>Evaluations section content</div>;
      case 'Propositions':
        return <div>Propositions section content</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="profileContainer">
        <div className="profileHeader">
          <img src={user.picture} alt="Profile" className="profileImg" />
          <div className="profileDetails">
            <h2>{user.pseudo}</h2>
            <div className="Five-Rate-Active Larger">
              <p className="screenReaders">Rated {rating} out of 5</p>
              {[1, 2, 3, 4, 5].map((rate) => (
                <button
                id="buttonStar"
                  key={rate}
                  type="button"
                  className={rate <= rating ? 'rate-value-full' : 'rate-value-empty'}
                  aria-label={`Rate ${rate} out of 5`}>
                  <span aria-hidden="true" />
                </button>
              ))}
            </div>
            <p className='Location'>Paris, France</p>
            <p className='Subscribe'>Member since January 2024</p>
            <div>
              <button id="buttonModif"
              type="button" 
              onClick={null}>Modifications profil</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="Vitrine">Vitrine</ToggleButton>
          <ToggleButton value="Evaluations">Evaluations</ToggleButton>
          <ToggleButton value="Propositions">Propositons</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="section-content">
        {renderSection()}
      </div>
    </>
  );
}
