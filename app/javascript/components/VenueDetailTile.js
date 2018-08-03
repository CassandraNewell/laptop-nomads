import React from 'react';

const VenueDetailTile = (props) => {
  let website
  let hours
  let photo_url
  let description
  let address


  if(props.photo_url){
    photo_url = props.photo_url.url
  }

  if (props.open_time != "undefined" && props.close_time != "undefined") {
    hours = <p className="hours">Hours: {props.open_time} - {props.close_time}</p>
  }

  if(props.venue_url != "undefined"){
    website = <p className="venue-url"><a href={props.venue_url}>Website</a></p>
  }

  if(props.description != "undefined"){
    description = <p className="description">{props.description}</p>
  }

  if(props.address != "undefined"){
    address = <p className="address">Address: {props.address}</p>
  }


  return(
    <div className="venue_detail">
      <div className="grid-x">
        <div className="cell small-6">
          <h1>{props.name}</h1>
            {website}
            {description}
            {address}
            {hours}
        </div>
        <div className="cell small-6">
          <img className="venue-show-img" src={photo_url} alt={props.name}/>
        </div>
      </div>
    </div>
  )
}

export default VenueDetailTile;
