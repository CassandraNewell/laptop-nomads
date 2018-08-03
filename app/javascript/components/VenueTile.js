import React from 'react';
import { Link } from 'react-router'

const VenueTile = (props) => {
  return(
    <div className="venue_tile">
      <Link to={`/venues/${props.id}`}>
        <div className="">
          <img src={props.photo_url} alt={props.name} className="venue-index-pic"/>
          <div className="venue_name">
            {props.name}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default VenueTile;
