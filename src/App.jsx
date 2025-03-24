import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import MapComponent from "./Components/MapComponent";
import Footer from "./Components/Footer";
import TripsSection from "./Components/TripSection";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Newsletter from "./components/Newsletter";

function App() {
  const images = Object.values(
    import.meta.glob("./assets/mountaingallery/*.jpg", { eager: true })
  ).map((module) => module.default);

  return (
    <>
      <Home />
      <div className="container">
        <TripsSection />
        <div>
          <About />
        </div>
        <Navigation />
        <MapComponent />
        <h1
          className="text-center fw-bold text-primary"
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
