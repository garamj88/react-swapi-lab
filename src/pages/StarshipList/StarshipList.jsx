
import { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'


const StarshipList = (props) => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(()=> {
    getAllStarships()
    .then(starshipData => setStarshipList(starshipData.results))
  }, [])

  return ( 
    <>
    <h1>STAR WARS STARSHIPS</h1>
    <div className='starship-container'>
    {starshipList.length ? 
      <>
        {starshipList.map((starship) => (
          <div key={starship.url}>
            <Link
              to="/starship"
              state={{ starship }}
            >
              {starship.name}
            </Link><br/>
          </div>
        ))}
      </>
      :
      <>
        <h2>Loading starships...</h2>
      </>}
      </div>
    </>
   );
}
 
export default StarshipList;