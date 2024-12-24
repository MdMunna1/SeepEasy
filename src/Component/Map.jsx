// import { Marker } from "pigeon-maps";
import React from "react";
import { Map, Marker } from "pigeon-maps";

const MyMap = () => {
  const mapCenter = [23.8103, 90.4125];

  return (
    <div className="h-screen w-full">
      <h1 className="text-center text-2xl font-bold my-4">Pigeon Maps Example</h1>
      <Map height={500} defaultCenter={mapCenter} defaultZoom={11}>
        <Marker width={50} anchor={mapCenter} />
      </Map>
    </div>
  );
};

export default MyMap;
