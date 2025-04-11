import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useNavigate } from 'react-router-dom';
import './Map.css';

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [45, 45],
});

const MapCenter = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 14);
    }
  }, [center, map]);

  return null;
};

const Map = () => {
  const [depots, setDepots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDepot, setSelectedDepot] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("VITE_BACKEND_URL =>", import.meta.env.VITE_BACKEND_URL);

    const fetchDepots = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/depots`, {
          method: 'GET',
          credentials: 'include'
        });

        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

        const data = await res.json();
        console.log("Fetched Data:", data);

        const validDepots = data.filter(
          (depot) =>
            depot.location &&
            typeof depot.location.lat === "number" &&
            typeof depot.location.lng === "number"
        );

        setDepots(validDepots);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching depots:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDepots();
  }, []);

  const handleDepotChange = (event) => {
    const depotId = event.target.value;
    const depot = depots.find((d) => d._id === depotId);
    setSelectedDepot(depot);
  };

  if (loading) return <p>Loading map...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("Depots:", depots);
  console.log("Selected Depot:", selectedDepot);

  return (
    <div className="map-wrapper">
      <div className="dropdown-container">
        <select onChange={handleDepotChange} className="dropdown">
          <option value="">Select a Depot</option>
          {depots.map((depot) => (
            <option key={depot._id} value={depot._id}>
              {depot.name}
            </option>
          ))}
        </select>
      </div>

      {/* 🔥 Added inline style for height fix */}
      <div className="map-container" style={{ height: '500px', width: '100%' }}>
        <MapContainer
          center={
            selectedDepot
              ? [selectedDepot.location.lat, selectedDepot.location.lng]
              : [28.6139, 77.2090]
          }
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {selectedDepot && (
            <MapCenter center={[selectedDepot.location.lat, selectedDepot.location.lng]} />
          )}

          {depots.map((depot) => (
            <Marker
              key={depot._id}
              position={[depot.location.lat, depot.location.lng]}
              icon={customIcon}
              eventHandlers={{
                click: () => navigate(`/depot/${depot._id}`),
              }}
            >
              <Tooltip direction="top" offset={[0, -45]} opacity={1} permanent={false}>
                <img
                  src={depot.image || 'https://via.placeholder.com/150'}
                  alt={depot.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
