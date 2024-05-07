import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { GeoJsonObject } from 'geojson';
import countries from '../public/data/countries.json';
import { LatLngTuple } from 'leaflet';
import './Map.css'

const center: LatLngTuple = [20, 10]; 

interface WorldMapProps {
  onSelectCountry: (country: any) => void;
}

const WorldMap: React.FC<WorldMapProps> = ({ onSelectCountry }) => {
  const onEachCountry = (feature: any, layer: any) => {
    layer.on({
      click: () => {
        onSelectCountry(feature); 
      }
    });
  };

  return (
    <MapContainer center={center} zoom={2} className="dark-map" scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        data={countries as GeoJsonObject}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
}

export default WorldMap;
