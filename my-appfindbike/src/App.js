import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import MapContainer from "./components/MapContainer"
import SearchBar from './components/SearchBar';

function App() {
  const [center, setCenter] = useState({ lat: 40.7446790, lng: -73.9485420 }); // default center
  const [zoom, setZoom] = useState(13); // default zoom level

  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) {
      return;
    }
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: searchTerm,
        key: 'AIzaSyCwb82Tu06wUCSTpEHM50TefwGFFN0iIks', // replace with your actual API key
      }
    });

    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      setCenter({ lat: location.lat, lng: location.lng });
      setZoom(18); // update the zoom level after a successful search
    } else {
      console.error('Geocoding was not successful:', response.data.status);
    }
  };

  return (
    <div className="App">
      <i>
        
      </i>
      <div>
        <SearchBar onSearch={handleSearch}/>
      </div>
      <div className="map-container">
        <MapContainer center={center} zoom={zoom}/>
      </div>
    </div>
  );
}

export default App;