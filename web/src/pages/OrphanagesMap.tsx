import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker } from "react-leaflet";
import Leftlet from "leaflet";

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from "../images/Map-marker.svg";

import '../styles/pages/orphanages-map.css';

const mapIcon = Leftlet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

function OrphanagesMap() {
  return (
    <div className="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas criança estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Florianópolis</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <Map
        center={[-27.5926192, -48.5287276]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={mapIcon} position={[-27.5926192, -48.5287276]}></Marker>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;