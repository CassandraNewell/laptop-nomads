import React from 'react';
import { Link } from 'react-router'

const VenueTile = (props) => {
  return(
    <div className="row column">
      <div className="column small-3">
        <Link to={`/venues/${props.id}`}>
          {props.name}
        </Link>
      </div>
      <div className="column small-9">
        <img src={props.photo_url} alt={props.name} className="venue-index-pic"/>
      </div>
    </div>
  )
}

export default VenueTile;
