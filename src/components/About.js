import Nature from "../images/Munnar/IMG_1682.jpg";
import Logo from "../images/Untitled design-Photoroom.png"; 
import TrekkingGroup from "../images/nature2.jpg"; 
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHiking } from "react-icons/fa";
import { useRef } from "react";



export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef })
  const trekkerX = useTransform(scrollYProgress, [0, 1], [-100, 400]);
  


  return (

    
    <motion.div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 w-100"
      initial={{ opacity: 0 }}
      
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <motion.div
      backgroundColor= "#190108"
        className="position-relative text-center w-100 z-2"
        style={{ backgroundColor: "transparent", transition: "background-color 0.5s ease-in-out" }}
        whileHover={{ backgroundColor: "#190108" }}
      >
        <img
          className="img-fluid w-100"
          src={Nature}
          alt="Background"
          style={{ maxHeight: "800px", objectFit: "cover", filter: "brightness(95%)" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-white">
          <img src={Logo} alt="Novare Logo" style={{ width: "200px", marginBottom: "0px" }} />
          <h1 className="display-3 fw-bold text-black ">Novare Club</h1>
          <p className="lead text-black " >Sprint | Struggle | Succeed </p>
        </div>
      </motion.div>

      {/* About Section */}
      
      <div
       className="d-flex flex-column align-items-center justify-content-center min-vh-100"
       style={{ 
         backgroundColor: "#190108", 
         paddingTop: "6rem", 
         paddingBottom: "3rem", 
         width: "100vw", 
         overflowX: "hidden" 
       }}> 
       <motion.div
                className="text-orange-500 absolute bottom-0 left-10"
                style={{ x: trekkerX }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              >
                <FaHiking size={70} className="text-white" />
              </motion.div>

     
      <div className="container py-5 text-center text-white">
        <h2 className="display-5 fw-bold text-warning">About Us</h2>
        <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
          Welcome to <span className="text-warning">Novare</span>, the Trekking & Adventure Club of IIT Palakkad! 
          From breathtaking trails to thrilling expeditions, we bring together a community passionate about exploring the great outdoors.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src={TrekkingGroup}
              alt="Trekking Group"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "400px" }}
            />
          </div>
          <div className="col-md-6 text-white">
            <h3 className="text-warning">Our Vision</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><strong> Nature & Adventure:</strong> Inspire love for trekking & wilderness.</li>
              <li className="mb-2"><strong> Leadership & Teamwork:</strong> Build resilience & confidence.</li>
              <li className="mb-2"><strong> Sustainability:</strong> Promote eco-friendly & responsible trekking.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
}
