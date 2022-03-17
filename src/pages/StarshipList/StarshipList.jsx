
import { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'


const StarshipList = (props) => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    getAllStarships()
      .then(starshipData => setStarshipList(starshipData.results))
  }, [])

  return (
    <>
      <div className='starship-container'>
        {starshipList.length ?
          <>
            {starshipList.map((starship) => (
              <div
                key={starship.url}
                className="starship-card">
                <Link
                  className="starship-name"
                  to="/starship"
                  state={{ starship }}
                >
                  {starship.name}
                </Link>
              </div>
            ))}
          </>
          :gi
          <>
            <h2>Loading starships...</h2>
          </>}
      </div>
    </>
  );
}

export default StarshipList;