import {  useState, useCallback, } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import profilImg from '../../assets/images/Antoine-Durand.png';

import './Profil.css';

export default function Profil() {
  const [alignment, setAlignment] = useState('Showcase');

  const handleChange = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }, []);



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
      <div className="profilContainer">
        <div className="profilHeader">
          <img src={profilImg} alt="Profil" className="Profil-Image" />
          <div className="profilDetails">
            <h2>Antoine Durand</h2>
            <div className="Five-Rate-Active Larger">
              <p className="screenReaders">Rated {rating} out of 5</p>
              {[1, 2, 3, 4, 5].map((rate) => (
                <button
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
            <div className='Button'>
              <button type="button" onClick={null}>Modifications profil</button>
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
