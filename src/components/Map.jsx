import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const OfficeLocationMap = () => {
  const officeLocation = [21.778019533103414, 70.61732114187448];

  // Use the default Leaflet marker icon
  const customMarkerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className='office-location-container'>
      <div className='map-wrapper'>
        <MapContainer
          center={officeLocation}
          zoom={12}
          style={{ height: "300px", width: "100%", borderRadius: " 10px", zIndex: "1" }}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={officeLocation} icon={customMarkerIcon}>
            <Popup>
              Your Office
              <br />
              Insert any additional information here.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default OfficeLocationMap;
