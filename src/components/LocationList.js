import React from 'react'

export const LocationList = ({locations}) => {
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

