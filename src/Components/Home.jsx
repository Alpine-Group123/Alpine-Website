import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import backgroundImg from "../assets/images/IceMountain.jpg";
import img1 from "../assets/images/Hiker3.jpg";
import img2 from "../assets/images/Hiker4.jpg";

const Home = () => {
  return (
    <section
      className="position-relative text-white text-center vh-100 d-flex align-items-center"
      style={{
        background: `url(${backgroundImg}) no-repeat center center/cover`,
      }}
    >
      {/* Content */}
      <div className="absolute left-12 top-1/3 text-white max-w-lg">
        <h1 className="text-6xl font-bold leading-tight">AMAZING MOUNTAIN TO EXPLORE</h1>
      </div>

      {/* Stats */}
      <div className="absolute right-12 bottom-20 text-white">
        <p className="text-xl">
          Altitude <span className="font-bold text-2xl">1650m</span>
        </p>
        <p className="text-xl">
          Tracks <span className="font-bold text-2xl">7</span>
        </p>
        <p className="text-xl">
          Tourists / year <span className="font-bold text-2xl">2000+</span>
        </p>
      </div>

      {/* Image Gallery */}
      <div className="d-flex justify-content-center mt-5">
        <img
          src={img1}
          className="rounded shadow-lg mx-2"
          alt="hiker"
          width="200"
          height="130"
        />
        <img
          src={img2}
          className="rounded shadow-lg mx-2"
          alt="mountain"
          width="200"
          height="130"
        />
      </div>

      {/* Scroll Bar Effect */}
      <div
        className="mt-3 mx-auto bg-light"
        style={{ width: "200px", height: "5px", borderRadius: "10px" }}
      >
        <div
          className="bg-primary"
          style={{ width: "50%", height: "5px", borderRadius: "10px" }}
        ></div>
      </div>
    </section>
  );
};

export default Home;