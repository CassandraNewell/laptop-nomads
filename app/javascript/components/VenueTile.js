import React from 'react';

const VenueTile = (props) => {


  return(
    <div className="row column">
      <p>{props.name}</p>
      <img src={props.photo_url} alt={props.name} className="venue-index-pic"/>
    </div>
  )
}

export default VenueTile;
