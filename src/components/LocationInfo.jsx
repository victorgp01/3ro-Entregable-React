import React from "react";

const LocationInfo = ({ location }) => {
  return (
    <article>
      <h2 className="resident_title">{location?.name}</h2>
      <ul className="resident_location">
        <li>
          <span>Type:</span>
          {location?.type}
        </li>
        <li>
          <span>Dimension:</span>
          {location?.dimension}
        </li>
        <li>
          <span>Population:</span>
          {location?.residents.length}
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
