import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import backgroundImg from "../assets/images/IceMountain.jpg";

/**
 * Home Component
 * 
 * This component represents the homepage of the Alpine Website. It features a visually appealing 
 * hero section with animated statistics and a motivational quote. The component is designed to 
 * engage users and encourage exploration of the website.
 * 
 * Features:
 * - Animated statistics for altitude, tracks, and tourists, which increment dynamically over time.
 * - A motivational quote with a smooth fade-in animation.
 * - A call-to-action button that smoothly scrolls to the "climbs" section of the page.
 * - A responsive layout with a visually striking background image.
 * 
 * @component
 * @returns {JSX.Element} The rendered Home component.
 * 
 * @example
 * // Usage
 * <Home />
 * 
 * @dependencies
 * - React: useState, useEffect for state management and lifecycle handling.
 * - Framer Motion: motion for animations.
 * 
 * @styles
 * - Background image with a dark overlay for better text visibility.
 * - Responsive typography and layout for optimal viewing on various devices.
 * - Custom button styling for a modern and interactive user experience.
 * 
 * @animations
 * - Smooth fade-in and slide-up animations for the heading and statistics.
 * - Incremental animation for statistics over a 2-second duration.
 * 
 * @interactivity
 * - "Explore now" button scrolls to the "climbs" section using smooth scrolling.
 * 
 * @notes
 * - Ensure the `backgroundImg` variable is defined and points to a valid image URL.
 * - The component is designed to be used as part of the Alpine Website project.
 */
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
      className="text-white text-center h-100"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg}) no-repeat center center/cover`,
        zIndex: -1,
        paddingBottom: "10rem",
      }}
    >
      {/* Content */}
      <div
        className="row"
        id="home"
        style={{ paddingTop: "15rem", paddingInlineStart: "5rem" }}
      >
        <div className="col-sm text-white">
          <motion.h1
            className="fw-bold leading-tight text-start lh-base"
            style={{ fontSize: "4rem" }}
            initial={{ opacity: 0, y: 100 }} // Initial state: hidden and below
            animate={{ opacity: 1, y: 0 }} // Animate only when in view
            transition={{ duration: 3.5, ease: "easeOut", delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            AMAZING MOUNTAIN TO EXPLORE
          </motion.h1>
          <p className="lh-lg text-start pt-4">
            Do not follow where the path may <br /> lead. Go instead where there
            is no
            <br />
            path and leave a trail
          </p>
          <div className="d-flex align-items-center">
            <span className="fw-bold text-white me-2 pt-3">RALPH EMERSON</span>
            <div
              className="bg-primary mt-3"
              style={{ height: "5px", borderRadius: "10px", width: "30px" }}
            ></div>
          </div>
        </div>
        {/* Stats */}
        <div className="col-sm text-white text-start ms-5-sm ps-md-5 ps-lg-5 fs-5 pt-4 me-5">
          <div>
            <div style={{ fontSize: "1rem" }}>Altitude: </div>
            <motion.div
              className="fw-bold fs-4"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 4 }}
            >
              {stats.altitude}
            </motion.div>
          </div>
          <div className="pt-4">
            <div style={{ fontSize: "1rem" }}>Tracks: </div>
            <motion.div
              className="fw-bold fs-4"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 4 }}
            >
              {stats.tracks}
            </motion.div>
          </div>
          <div className="pt-5">
            <div style={{ fontSize: "1rem" }}>Tourists / year: </div>
            <motion.div
              className="fw-bold fs-4"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 4 }}
            >
              {stats.tourists}+
            </motion.div>
          </div>
          <button
            className="btn bg-primary mt-5 text-white h6"
            href="#climbs"
            onClick={() => {
              const climbsSection = document.getElementById("climbs");
              if (climbsSection) {
                climbsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Explore now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
