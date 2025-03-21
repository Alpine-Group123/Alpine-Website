import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import backgroundImg from "../assets/images/IceMountain.jpg";
import img1 from "../assets/images/Hiker3.jpg";
import img2 from "../assets/images/Hiker4.jpg";

const Home = () => {
  const [stats, setStats] = useState({ altitude: 0, tracks: 0, tourists: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 40;
    const intervalTime = duration / steps;
    let count = 0;

    const interval = setInterval(() => {
      count++;
      setStats({
        altitude: Math.round((count / steps) * 1650),
        tracks: Math.round((count / steps) * 7),
        tourists: Math.round((count / steps) * 2000),
      });
      if (count === steps) {
        clearInterval(interval);
      }
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="position-relative text-white text-center h-100 d-flex align-items-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg}) no-repeat center center/cover`,
        zIndex: -1,
        paddingBottom: "10rem",
      }}
    >
      {/* Content */}
      <div
        className="row container"
        style={{ paddingTop: "15rem", paddingInlineStart: "5rem" }}
      >
        <div className="col-sm text-white">
          <h1
            className="fw-bold leading-tight text-start lh-base"
            style={{ fontSize: "4rem" }}
          >
            AMAZING MOUNTAIN TO EXPLORE
          </h1>
          <p className="lh-lg text-start pt-4">
            Do not follow where the path may <br /> lead. Go instead where there
            is no
            <br />
            path and leave a trail
          </p>
          {/* <p className="text-start pt-3 fw-bold">RALPH EMERSON</p> */}
          <div className="d-flex align-items-center">
            <span className="fw-bold text-white me-2 pt-3">RALPH EMERSON</span>
            <div
              className="bg-primary mt-3"
              style={{ height: "5px", borderRadius: "10px", width: "30px" }}
            ></div>
          </div>
        </div>
        {/* Stats */}
        <div className="col-sm text-white text-start ms-5 ps-5 fs-5 pt-4">
          <p>
            <div style={{ fontSize: "1rem" }}>Altitude: </div>
            <motion.div
              className="fw-bold fs-4"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 4 }}
            >
              {stats.altitude} m
            </motion.div>
          </p>
          <p className="pt-3">
            <div style={{ fontSize: "1rem" }}>Tracks: </div>
            <motion.div
              className="fw-bold fs-4"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 4 }}
            >
              {stats.tracks}
            </motion.div>
          </p>
          <p className="pt-3">
            <div style={{ fontSize: "1rem" }}>Tourists / year: </div>
            <motion.div
              className="fw-bold fs-4"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 4 }}
            >
              {stats.tourists}+
            </motion.div>
          </p>
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
        </div>
      </div>
    </section>
  );
};

export default Home;
