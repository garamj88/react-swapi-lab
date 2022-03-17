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
    <h3>NAME: {}</h3>
    </>
   );
}
 
export default StarshipDetails;