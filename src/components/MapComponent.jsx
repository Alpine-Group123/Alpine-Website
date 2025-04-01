import { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/**
 * MapComponent is a React functional component that renders an interactive map
 * using Leaflet.js. It displays the user's current location (if geolocation is enabled)
 * and marks various alpine club locations on the map with popups containing their details.
 *
 * Features:
 * - Fetches and displays the user's current geographical coordinates.
 * - Initializes a Leaflet map centered on the user's location.
 * - Adds markers for predefined alpine club locations with popups showing their names and success stories.
 * - Displays a loading spinner until the map is fully loaded.
 *
 * @component
 * @returns {JSX.Element} The rendered MapComponent with a map and alpine club details.
 *
 * @example
 * <MapComponent />
 *
 * Dependencies:
 * - Leaflet.js for map rendering and interactivity.
 * - React hooks (`useState`, `useEffect`) for state management and side effects.
 */
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
    {
      id: 4,
      name: "Andes Adventurers",
      coords: [-32.6532, -70.0109],
      successStory: "Conquered Aconcagua countless times!",
    },
    {
      id: 5,
      name: "Alpine Ascenders",
      coords: [45.8326, 6.8652],
      successStory: "Masters of Mont Blanc ascents.",
    },
    {
      id: 6,
      name: "Denali Dreamers",
      coords: [63.0695, -151.0074],
      successStory: "Leading expeditions to North America's highest peak.",
    },
    {
      id: 7,
      name: "Patagonia Climbers",
      coords: [-49.3186, -73.5916],
      successStory: "Specialists in Fitz Roy and Cerro Torre climbs.",
    },
    {
      id: 8,
      name: "Himalayan Heroes",
      coords: [28.5983, 83.9311],
      successStory: "Guided hundreds to Annapurna's summit.",
    },
    {
      id: 9,
      name: "Atlas Mountaineers",
      coords: [31.0738, -7.9126],
      successStory: "Experts in Toubkal expeditions.",
    },
    {
      id: 10,
      name: "Alaskan Ice Climbers",
      coords: [61.2181, -149.9003],
      successStory: "Pioneers of ice climbing in Alaska.",
    },
    {
      id: 11,
      name: "Pyrenees Pioneers",
      coords: [42.503, 1.518],
      successStory: "Trailblazers of Pyrenean adventures.",
    },
    {
      id: 12,
      name: "Sierra Nevada Seekers",
      coords: [36.5786, -118.2923],
      successStory: "Conquered Mount Whitney countless times.",
    },
    {
      id: 13,
      name: "Carpathian Climbers",
      coords: [47.1585, 24.3916],
      successStory: "Masters of the Carpathian peaks.",
    },
    {
      id: 14,
      name: "Great Dividers",
      coords: [-37.456, 145.856],
      successStory: "Explorers of Australia's Great Dividing Range.",
    },
    {
      id: 15,
      name: "Scandinavian Summiteers",
      coords: [61.255, 8.985],
      successStory: "Specialists in Nordic mountain expeditions.",
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
    <section id="clubs">
      {mapLoaded && (
        <>
          <h1 className="text-center my-4 pt-5 text-primary fw-bold">ALPINE CLUBS</h1>
          <p className="text-center my-4">
            Join one of our clubs to climb the highest peaks in the world!
          </p>
        </>
      )}
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
      {!mapLoaded && (
        <div style={{ position: "relative", minHeight: "100vh" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
            }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="text-center" style={{ marginLeft: "-2rem" }}>
              Loading map...
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MapComponent;
