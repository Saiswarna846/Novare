import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";  // ✅ FIXED: Import motion
import Nature2 from "../images/Chimmony/Chimmony.jpeg";
import Nature3 from "../images/Munnar/Munnar.png";
import Nature from "../images/Dhoni/Dhoni_3.png";

// ✅ FIXED: Defined destinations array
const destinations = [
  { img: Nature2, title: "Chimmony" },
  { img: Nature3, title: "Munnar" },
  { img: Nature, title: "Dhoni" },
];

export default function Captions() {  // ✅ FIXED: Ensure default export
  return (
    <div className="container my-5">
      <h2 className="text-black mb-4">Top Destinations</h2>

      {/* Sliding Destinations */}
      <div className="overflow-hidden" style={{ height: "75vh" }}>
        <div className="d-flex" style={{ gap: "20px" }}>
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              className="position-relative flex-shrink-0 d-flex align-items-end"
              style={{
                width: "35%",
                height: "50vh",
                borderRadius: "20px",
                overflow: "hidden",
              }}
              whileHover={{ scale: 1.05 }}
            >
              {/* ✅ FIXED: Wrap Image in a Link */}
              <Link
                to={`/novare/${dest.title.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <motion.img
                  src={dest.img}
                  alt={dest.title}
                  className="w-100 h-100 object-fit-cover"
                  whileHover={{ scale: 1.1 }}
                />
                {/* Title Section */}
                <motion.div
                  className="position-absolute bottom-0 w-100 p-3 text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "0 0 20px 20px",
                    transition: "0.3s ease-in-out",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <h5 className="mb-0" style={{ color: "black", fontWeight: "bold" }}>
                    {dest.title}
                  </h5>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
