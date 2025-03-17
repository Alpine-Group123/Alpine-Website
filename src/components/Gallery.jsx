const Gallery = ({ images }) => {
  // Split images into groups of 6 for each slide
  const groupedImages = [];

  if (window.innerWidth > 580) {
    for (let i = 0; i < images.length; i += 6) {
      groupedImages.push(images.slice(i, i + 6));
    }
  } else {
    for (let i = 0; i < images.length; i += 1) {
      groupedImages.push(images.slice(i, i + 1));
    }
  }

  return (
    <div className="container-fluid mt-5">
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
