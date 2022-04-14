import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const GoogleMap1 = (props) => {

  // const position = [51.505, -0.09];
  // 38.8765507,-77.1141811
  const position = [38.8765507, -77.1141811];

  return (
    <div className="map-wrapper">
      

      <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>


    </div>
  );
};

export default GoogleMap1;