import React, { useState, useEffect } from 'react';
import { getStarshipDetails } from '../../services/sw-api';
import { useLocation } from 'react-router-dom';

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    getStarshipDetails(location.state.starship.url)
      .then(starshipData => setStarshipDetails(starshipData))
  })

  return (
    <>
    <div className='detail'>
      <div className='detail-card'>
        {starshipDetails.length ?
          <>
            <h3>NAME: {starshipDetails.name}</h3>
            <h3>MODEL: {starshipDetails.model}</h3>
            <a href='/'>RETURN</a>
          </>
          :
          <>
            <h2>Loading details...</h2>
          </>
        }
      </div>
      </div>
    </>
  );
}

export default StarshipDetails;