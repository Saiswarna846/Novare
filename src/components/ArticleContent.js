import { useState, useEffect } from "react";
import artdetails from "../articlecontents";
import Nature from "../images/nature1.jpg";

export default function TrailContent(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  for (const key in artdetails) {
    if (props.url === key) {
      return (
        <div
          className="overflow-hidden"
          style={{
            backgroundColor: "#190108",
            width: "100vw",
            minHeight: "100vh",
            overflowX: "hidden", // Prevents horizontal scroll
          }}
        >
          {/* Background Image */}
          <img
            className="position-fixed top-0"
            src={Nature}
            alt="Background"
            style={{
              width: "100vw",
              height: isMobile ? "30vh" : "100vh",
              objectFit: "cover",
              opacity: 0.6,
            }}
          />

          {/* Content Wrapper */}
          <div className="position-relative z-2 w-100">
            {/* Overlay Content */}
            <div className="text-white text-center w-100">
              <p
                className="fw-bold"
                style={{
                  paddingTop: isMobile ? "12vh" : "20vh",
                  fontSize: isMobile ? "6vw" : "5vw",
                  lineHeight: "1.2",
                  textShadow: "2px 2px 10px rgba(255, 255, 255, 0.2)",
                  margin: "0 auto", // Prevents unwanted shifting
                  maxWidth: "90vw", // Keeps text inside viewport
                }}
              >
                {artdetails[key].title}
              </p>
              <p
                className="fw-light mx-auto"
                style={{
                  fontSize: isMobile ? "4vw" : "2vw",
                  maxWidth: isMobile ? "90vw" : "80vw",
                  wordBreak: "break-word",
                  color: "#E5E5E5",
                  margin: "0 auto", // Prevents content shifting
                }}
              >
                {artdetails[key].desc}
              </p>
            </div>

            {/* Article Content - Full Width */}
            <div
              className="text-white py-4"
              style={{
                backgroundColor: "#190108",
                width: "100vw", // Ensures full-width section
              }}
            >
              <div className="w-100 px-3">
                {/* Title */}
                <p
                  className="text-center"
                  style={{
                    fontSize: isMobile ? "5vw" : "3vw",
                    fontWeight: "bold",
                    color: "#FFD700",
                    maxWidth: "90vw",
                    margin: "0 auto", // Centers text properly
                  }}
                >
                  {artdetails[key].title}
                </p>

                {/* Content */}
                <div
                  className="fs-5 article_content"
                  style={{
                    fontSize: isMobile ? "4vw" : "1.2rem",
                    padding: isMobile ? "0 5vw" : "0 10vw",
                    color: "#E5E5E5",
                    textAlign: "justify",
                    maxWidth: "90vw",
                    margin: "0 auto", // Prevents left shifting
                  }}
                >
                  {artdetails[key].content}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
