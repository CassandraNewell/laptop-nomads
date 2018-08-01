import React from 'react';

const VenueDetailTile = (props) => {
  let hours
  if (props.open_time && props.close_time) {
    hours = `Hours: ${props.open_time} - ${props.close_time}`
  }
debugger
  let photo_url;
  if(props.photo_url){
    photo_url = props.photo_url.url
  }
  return(
    <div>
      <h1>{props.name}</h1>
      <div className="column small-6">
        <p className="venue-url"><a href={props.venue_url}>Website</a></p>
        <p className="description">{props.description}</p>
        <p className="address">Address: {props.address}</p>
        <p className="hours">{hours}</p>
      </div>
      <div className="column small-6">
        <img src={photo_url} alt={props.name}/>
      </div>
    </div>
  )
}

export default VenueDetailTile;
