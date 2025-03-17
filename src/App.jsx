import "./App.css";
import Gallery from "./components/Gallery";
import mountain1 from "./assets/mountain1.jpg";
import mountain2 from "./assets/mountain2.jpg";
import mountain3 from "./assets/mountain3.jpg";
import mountain4 from "./assets/mountain4.jpg";
import mountain5 from "./assets/mountain5.jpg";
import mountain6 from "./assets/mountain6.jpg";
// import mountain7 from "./assets/mountain7.jpg";
// import mountain8 from "./assets/mountain8.jpg";
// import mountain9 from "./assets/mountain9.jpg";
// import mountain10 from "./assets/mountain10.jpg";
// import mountain11 from "./assets/mountain11.jpg";
// import mountain12 from "./assets/mountain12.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const images = [
    mountain1,
    mountain2,
    mountain3,
    mountain4,
    mountain5,
    mountain6,
    mountain5,
    mountain4,
    mountain3,
    mountain2,
    mountain1,
    mountain6,
  ];
  return (
    <div className="container">
      <h1 className="display text-center text-bold">GALLERY</h1>
      <Gallery images={images} />
    </div>
  );
}

export default App;
