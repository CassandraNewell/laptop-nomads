import React from 'react';

const VenueDetailTile = (props) => {
  let hours
  if (props.open_time && props.close_time) {
    hours = `Hours: ${props.open_time} - ${props.close_time}`
  }

  return(
    <div className="row column">
      <h1>{props.name}</h1>
      <div className="column small-6">
        <p><a href={props.venue_url}>Website</a></p>
        <p>{props.description}</p>
        <p>Adddress: {props.address}</p>
        <p>{hours}</p>
      </div>
      <div className="column small-6">
        <img src={props.photo_url} alt={props.name}/>
      </div>
    </div>
  )
}

export default VenueDetailTile;
