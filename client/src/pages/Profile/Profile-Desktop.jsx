import { useState, useCallback } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import ProfileImg from '../../assets/images/Antoine-Durand.png';

import './Profile-Desktop.css';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = useState('Vitrine');

  const handleChange = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }, []);

  const handleClick = () => {
  
  };

  return (
    <div>
      <div className="ProfilContainer">
        <div className="ProfilHeader">
          <img src={ProfileImg} alt="Profil" className="Profil-Image" />
          <div className="ProfilDetails">
            <h2>Antoine Durand</h2>
            <div className="Five-Rate-Active Larger">
              <p className="screenReaders">Noté 1.3 sur 5</p>
              {[1, 2, 3, 4, 5].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  className={rate <= 1.5 ? 'rate-value-full' : 'rate-value-empty'}
                  aria-label={`Noter ${rate} sur 5`}>
                  <span aria-hidden="true" />
                </button>
              ))}
            </div>
            <p className='Location'>Paris, France</p>
            <p className='Subcribe'>Membre depuis janvier 2024</p>
            <div className='Button'>
            {/* New button with onclick event */}
            <button type="button" onClick={handleClick}>Modifications Profil</button>
            </div>
          </div>
        </div>
      </div>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="Vitrine">Vitrine</ToggleButton>
        <ToggleButton value="Evaluations">Evaluations</ToggleButton>
        <ToggleButton value="Propositions">Propositions</ToggleButton>
      </ToggleButtonGroup>

    </div>
  );
}
