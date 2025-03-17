import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Gallery from "./components/Gallery";
import MapComponent from "./components/MapComponent";
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
  const images = Object.values(
    import.meta.glob("./assets/mountaingallery/*.jpg", { eager: true })
  ).map((module) => module.default);

  return (
    <div className="container">
      <Navigation />
      
      <About />
      <MapComponent />
      <h1
        className="display text-center text-bold text-main"
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
  );
}

export default App;
