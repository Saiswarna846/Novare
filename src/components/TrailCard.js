import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TrailCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const cardStyle = {
    transform: isHovered ? "translateY(-10px)" : "translateY(0)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    position: "relative",
    background: "#190108",
    borderRadius: "30px",
    padding: "30px",
    color: "white",
  };

  const loadingOverlayStyle = {
    display: imageLoaded ? "none" : "block",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#808080",
    opacity: 0.8,
    zIndex: 2,
    borderRadius: "30px",
  };

  return (
    <Link to={props.trailLink} className="text-decoration-none">
      <div className="col px-lg-4" data-aos="fade-up" data-aos-duration="1500">
        <div
          className="card shadow-lg text-center"
          style={cardStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={loadingOverlayStyle}></div>

          {/* Image with Fixed Aspect Ratio */}
          <div className="image-container">
            <img
              src={props.picurl}
              className="card-img-top rounded-rectangle mx-auto d-block"
              alt="Trail Image"
              style={{
                width: "100%",
                height: "300px", // Fixed height for consistency
                objectFit: "cover", // Crops excess without stretching
                borderRadius: "20px",
              }}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          <div className="card-body">
            <h5 className="card-title text-white mt-3">{props.title}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
}
