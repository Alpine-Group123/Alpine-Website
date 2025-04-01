import { useState, useEffect } from "react";

const Gallery = () => {
  // State to store all images fetched from the server
  const [images, setImages] = useState([]);
  // State to store images grouped for carousel slides
  const [groupedImages, setGroupedImages] = useState([]);

  // Fetch images from JSON server on component mount
  useEffect(() => {
    fetch("http://localhost:5000/data") // Fetch data from json-server
      .then((response) => response.json()) // Parse JSON response
      .then((data) => setImages(data.map((item) => item.img_path))) // Extract img_path from data
      .catch((error) => console.error("Error loading images:", error)); // Log errors if any
  }, []);

  // Function to group images into slides based on screen size
  const groupImages = () => {
    if (images.length === 0) return; // Exit if no images are available

    // Determine the number of items per slide based on screen width
    const itemsPerSlide = window.innerWidth > 580 ? 6 : 1;
    const newGroupedImages = [];

    // Group images into chunks of itemsPerSlide
    for (let i = 0; i < images.length; i += itemsPerSlide) {
      newGroupedImages.push(images.slice(i, i + itemsPerSlide));
    }

    // Update state with grouped images
    setGroupedImages(newGroupedImages);
  };

  // Run grouping logic on component mount and whenever the screen resizes
  useEffect(() => {
    groupImages(); // Initial grouping on mount

    // Debounced resize event handler
    const handleResize = () => {
      clearTimeout(window.resizeTimeout); // Clear previous timeout
      window.resizeTimeout = setTimeout(groupImages, 300); // Debounce resizing
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [images]); // Re-run effect whenever images change

  return (
    <div className="container-fluid mt-5" id="climbs">
      {/* Bootstrap carousel container */}
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Render grouped images as carousel slides */}
          {groupedImages.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`} // Set first slide as active
            >
              <div className="row justify-content-center">
                {/* Render each image in the group */}
                {group.map((image, imgIndex) => (
                  <div key={imgIndex} className="col-md-4 col-sm-4">
                    <img
                      src={image}
                      className="d-block w-100"
                      alt="Gallery image"
                      style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                      loading="lazy" // Lazy load images for performance
                      width={800}
                      height={600}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
