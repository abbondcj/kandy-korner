import React, { useState, useEffect} from "react"

export const LocationList = () => {
  const [locations, getLocations] = useState([])

  useEffect(
    () => {
      fetch("http://localhost:8088/locations")
        .then(res => res.json())
          .then(
            (data) => {
              getLocations(data)
            }
          )
    },
    []
  )
  return (
    <div id="locations">
      {
          locations.map(
              (location) => {
                  return <>
                  <div key={`location--${location.id}`}>
                    <p>{location.state + `, ` + location.city}</p>
                    <p>Hours: {location.open + `AM - ` + location.close + `PM`}</p>
                  </div><br></br>
                  </>
              }
          )
      }
    </div>
  )
}

