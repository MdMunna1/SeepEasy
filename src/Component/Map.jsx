// import { Marker } from "pigeon-maps";
import React from "react";
import { Map, Marker } from "pigeon-maps";

const MyMap = () => {
  const mapCenter = [23.8103, 90.4125];

  return (
    <div className="h-full w-full">
      <h1 className="text-center text-2xl text-white py-3 font-bold my-4">Hotel Location</h1>
      <Map height={400} defaultCenter={mapCenter} defaultZoom={11}>
        <Marker width={50} anchor={mapCenter} />
      </Map>
    </div>
  );
};

export default MyMap;
