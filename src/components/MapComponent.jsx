import { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [userCoords, setUserCoords] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const locations = [
    {
      id: 1,
      name: "Everest Explorers",
      coords: [27.9881, 86.925],
      successStory: "Summited Everest 5 times!",
    },
    {
      id: 2,
      name: "Kilimanjaro Trekkers",
      coords: [-3.0674, 37.3556],
      successStory: "100+ successful climbs!",
    },
    {
      id: 3,
      name: "Rocky Mountaineers",
      coords: [39.5501, -105.7821],
      successStory: "Guiding climbers since 1980.",
    },
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserCoords([latitude, longitude]);
        },
        () => alert("Could not get your position")
      );
    }
  }, []);

  useEffect(() => {
    if (userCoords) {
      const newMap = L.map("map").setView(userCoords, 1);
      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(newMap);

      locations.forEach((location) => {
        L.marker(location.coords)
          .addTo(newMap)
          .bindPopup(`<b>${location.name}</b><br>${location.successStory}`);
      });

      setMap(newMap);
      setMapLoaded(true); // Mark the map as loaded
    }
  }, [userCoords]);

  return (
    <div>
      {mapLoaded && (
        <>
          <h1 className="text-center my-4">ALPINE CLUBS</h1>
          <p className="text-center my-4">
            Join one of our clubs to climb the highest peaks in the world!
          </p>
        </>
      )}
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
      {!mapLoaded && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="text-center" style={{ marginLeft: "-2rem" }}>
            Loading map...
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
