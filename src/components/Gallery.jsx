import { useState, useEffect } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [groupedImages, setGroupedImages] = useState([]);

  // Fetch images from JSON server
  useEffect(() => {
    fetch("http://localhost:5000/data") // Fetch from json-server
      .then((response) => response.json())
      .then((data) => setImages(data.map((item) => item.img_path))) // Extract img_path
      .catch((error) => console.error("Error loading images:", error));
  }, []);

  // Function to group images based on screen size
  const groupImages = () => {
    if (images.length === 0) return;

    const itemsPerSlide = window.innerWidth > 580 ? 6 : 1;
    const newGroupedImages = [];

    for (let i = 0; i < images.length; i += itemsPerSlide) {
      newGroupedImages.push(images.slice(i, i + itemsPerSlide));
    }

    setGroupedImages(newGroupedImages);
  };

  // Run grouping on mount and whenever screen resizes (with debounce)
  useEffect(() => {
    groupImages();
    const handleResize = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(groupImages, 300); // Debounce resizing
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, [images]);

  return (
    <div className="container-fluid mt-5" id="climbs">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {groupedImages.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row justify-content-center">
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
                      loading="lazy"
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
