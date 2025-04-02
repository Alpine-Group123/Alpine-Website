import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import MapComponent from "./Components/MapComponent";
import Footer from "./Components/Footer";
import TripsSection from "./Components/TripSection";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Newsletter from "./Components/Newsletter";
import Guidelines from "./Components/Guidelines";

import { useState, useEffect } from "react";

function App() {
  // const images = Object.values(
  //   import.meta.glob("./assets/mountaingallery/*.jpg", { eager: true })
  // ).map((module) => module.default);

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
