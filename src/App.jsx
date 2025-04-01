import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Gallery from "./components/Gallery";
import About from "./components/About";
import MapComponent from "./components/MapComponent";
import Footer from "./Components/Footer";
import TripsSection from "./components/TripSection";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Newsletter from "./components/Newsletter";
import Guidelines from "./components/Guidelines";

import { useState, useEffect } from "react";

/**
 * The main App component serves as the entry point for the application.
 * It fetches image data from an API, manages the state of the images,
 * and renders various sections of the website, including the home page,
 * trips section, about section, guidelines, gallery, newsletter, and footer.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 *
 * @example
 * // Usage in a React application
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import App from './App';
 *
 * ReactDOM.render(<App />, document.getElementById('root'));
 *
 * @function
 * @name App
 *
 * @description
 * - Fetches image data from the API endpoint `http://localhost:5000/data`.
 * - Manages the `images` state using the `useState` hook.
 * - Uses the `useEffect` hook to fetch data on component mount.
 * - Logs the first image path to the console for debugging purposes.
 * - Renders child components such as `Home`, `TripsSection`, `About`, `Guidelines`, `Gallery`, `Newsletter`, and `Footer`.
 *
 * @dependencies
 * - React hooks: `useState`, `useEffect`
 * - Child components: `Home`, `TripsSection`, `About`, `Guidelines`, `Gallery`, `Newsletter`, `Footer`, `Navigation`, `MapComponent`
 *
 * @note
 * Ensure the API endpoint is running and accessible at `http://localhost:5000/data`.
 * Handle potential errors during data fetching gracefully.
 */
function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data") // Adjust API endpoint if necessary
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error loading images:", error));
  }, []);
  console.log(images[0]?.img_path);
  return (
    <>
      <Home />
      <TripsSection />
      <About />
      <Guidelines />
      <div className="container">
        <Navigation />
        <MapComponent />
        <h1
          className="text-center my-4 pt-5 text-primary fw-bold"
          style={{ marginTop: "9rem" }}
        >
          OUR CLIMBS
        </h1>
        <p className="text-center">
          We have climbed the highest mountains just to get a better view of the
          earth below.
        </p>
        <Gallery images={images} />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
