import React, { useEffect, useState } from 'react'

function Missions() {
  const [missions, setMissions] = useState([])

  useEffect(() => {
    fetchMissions()
  }, [])

  const fetchMissions = () => {
    fetch('http://127.0.0.1:3000/missions')
      .then((response) => response.json())
      .then((data) => setMissions(data))
      .catch((error) => console.error('Error fetching missions:', error))
  }

  return (
    <div className="container">
      <div className="row">
        {missions.map((mission) => (
          <div className="col-md-4" key={mission.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{mission.name}</h5>
                <p className="card-text">{mission.description}</p>
                <a href="/about" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Missions
