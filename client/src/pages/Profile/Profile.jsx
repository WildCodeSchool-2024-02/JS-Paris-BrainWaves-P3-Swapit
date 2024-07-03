import { useState, useCallback } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import profileImg from '../../assets/images/Antoine-Durand.png';

import './Profile.css';

export default function Profile() {
  const [alignment, setAlignment] = useState('Vitrine');

  const handleChange = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }, []);

  const handleClick = () => {
  
  };

  return (
    <><div>
      <div className="profilContainer">
        <div className="profilHeader">
          <img src={profileImg} alt="Profil" className="ProfilImg" />
          <div className="profilDetails">
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
              <button type="button" onClick={handleClick}>Modifications profil</button>
            </div>
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
          <section />
          <ToggleButton value="Evaluations">Evaluations</ToggleButton>
          <ToggleButton value="Propositions">Propositions</ToggleButton>
        </ToggleButtonGroup>
      </div>
  </>
  );
}
