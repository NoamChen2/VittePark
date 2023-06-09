import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 60px)', // this will take the full height of the viewport minus the height of the search bar
};
const mapStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  }
];

function MapContainer({ center, zoom }) {
  return (
    <LoadScript
      googleMapsApiKey= 'AIzaSyCwb82Tu06wUCSTpEHM50TefwGFFN0iIks'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        options={{ styles: mapStyles }}
      >
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;