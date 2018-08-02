import React from 'react';

const VenueDetailTile = (props) => {
  let hours
  if (props.open_time && props.close_time) {
    hours = `Hours: ${props.open_time} - ${props.close_time}`
  }
  let photo_url;
  if(props.photo_url){
    photo_url = props.photo_url.url
  }
  return(
    <div className=" bdred nomargin">
      <div className="grid-x">
        <div className="cell small-6">
          <h1>{props.name}</h1>
            <p className="venue-url"><a href={props.venue_url}>Website</a></p>
            <p className="description">{props.description}</p>
            <p className="address">Address: {props.address}</p>
            <p className="hours">{hours}</p>
        </div>
        <div className="cell small-6">
          <img className="venue-show-img" src={photo_url} alt={props.name}/>
        </div>
      </div>
    </div>
  )
}

export default VenueDetailTile;
