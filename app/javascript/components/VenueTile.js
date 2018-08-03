import React from 'react';
import { Link } from 'react-router'

const VenueTile = (props) => {
  return(
    <div className="venue_tile">
      <div className="">


      <Link to={`/venues/${props.id}`}>
      <img src={props.photo_url} alt={props.name} className="venue-index-pic"/>
      {props.name}
      </Link>
      </div>
    </div>
  )
}

export default VenueTile;
