import { useState, useEffect } from "react";

const Gallery = ({ images }) => {
  const [groupedImages, setGroupedImages] = useState([]);

  // Function to group images based on screen size
  const groupImages = () => {
    const newGroupedImages = [];
    const itemsPerSlide = window.innerWidth > 580 ? 6 : 1; // Adjust number of images per slide

    for (let i = 0; i < images.length; i += itemsPerSlide) {
      newGroupedImages.push(images.slice(i, i + itemsPerSlide));
    }

    setGroupedImages(newGroupedImages);
  };

  // Run grouping on mount and whenever screen resizes
  useEffect(() => {
    groupImages();
    window.addEventListener("resize", groupImages);
    return () => window.removeEventListener("resize", groupImages); // Cleanup on unmount
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
                  <div key={imgIndex} className="zoom-out col-md-4 col-sm-4">
                    <img
                      src={image}
                      className="d-block w-100 h-100"
                      alt={`Slide ${index + 1} - Image ${imgIndex + 1}`}
                      style={{ objectFit: "cover" }}
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
