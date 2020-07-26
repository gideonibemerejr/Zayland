import React from 'react';
import { useLocation } from 'react-router-dom';
const TrackNumber = ({ route, trackNo }) => {
  const location = useLocation();

  return (
    <div
      className={`${
        location.pathname === route ? 'bg-ftwl black' : ''
      } hover-bg-ftwl hover-black track-number flex justify-center items-center  br-100 mr4-l mb3 f3 mr3-l mr2`}
    >
      <p>{trackNo}</p>
    </div>
  );
};

export default TrackNumber;
