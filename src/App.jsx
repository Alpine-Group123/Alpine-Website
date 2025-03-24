import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import MapComponent from "./Components/MapComponent";
import Footer from "./Components/Footer";
import TripsSection from "./Components/TripSection";
import Home from "./components/Home";
import Navigation from "./Components/Navigation";
import Guidelines from "./Components/Guidelines";
import Newsletter from "./components/Newsletter";

function App() {
  const images = Object.values(
    import.meta.glob("./assets/mountaingallery/*.jpg", { eager: true })
  ).map((module) => module.default);

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
        className="display text-center text-bold text-main text-primary"
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
