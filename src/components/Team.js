import ProfileCard from "./ProfileCard";
import Nature from "../images/Munnar/Screenshot 2025-03-23 at 15.44.29.png";
import Harikrishnan from "../images/P_S_Harikrishnan.jpeg";
import { useState } from "react";
import { motion } from "framer-motion";
// Importing Team Members' Photos
import Ajay from "../utils/Team/Content/Ajay.png";
import Karthikeya from "../utils/Team/Content/Karthikeya.png";
import Sachin from "../utils/Team/Content/Sachin.png";
import Swamy from "../utils/Team/Content/Swamy.png";

import EMMANUEL from "../utils/Team/Coordinators/EMMANUEL.png";
import GNANAMAYI from "../utils/Team/Coordinators/GNANAMAYI.png";
import Harika from "../utils/Team/Coordinators/Harika.png";
import Jeeva from "../utils/Team/Coordinators/Jeeva.png";
import Prasanna from "../utils/Team/Coordinators/Prasanna.png";
import Shiva from "../utils/Team/Coordinators/Shiva.png";
import Vaibhav from "../utils/Team/Coordinators/Vaibhav.png";
import Lakshmi from "../utils/Team/Coordinators/lakshmi.png";

import sachin from "../utils/Team/Design/sachin.png";
import Chaitanya from "../utils/Team/Design/Chaitanya.png";

import Venkat from "../utils/Team/Social_media/Venkat.png";
import tarun from "../utils/Team/Social_media/tarun.png";

import Swarna from "../utils/Team/Swarna.png";
import Cipriyano from "../utils/Team/Cipriyano.png";
import Rithvik from "../utils/Team/rithvik.png";

export default function Team() {
  const tripCoordinators = [
    { photo: EMMANUEL, name: "EMMANUEL", role: "Trip Coordinator" },
    { photo: GNANAMAYI, name: "GNANAMAYI", role: "Trip Coordinator" },
    { photo: Harika, name: "Harika", role: "Trip Coordinator" },
    { photo: Jeeva, name: "Jeeva", role: "Trip Coordinator" },
    { photo: Prasanna, name: "Prasanna", role: "Trip Coordinator" },
    { photo: Shiva, name: "Shiva", role: "Trip Coordinator" },
    { photo: Vaibhav, name: "Vaibhav", role: "Trip Coordinator" },
    { photo: Lakshmi, name: "Lakshmi", role: "Trip Coordinator" },
  ];

  const creativeTeam = [
    { photo: Ajay, name: "Ajay", role: "Creative Team Member" },
    { photo: Karthikeya, name: "Karthikeya", role: "Creative Team Member" },
    { photo: Sachin, name: "Sachin", role: "Creative Team Member" },
    { photo: Swamy, name: "Swamy", role: "Creative Team Member" },
  ];

  const designTeam = [
    { photo: Chaitanya, name: "Chaitanya", role: "Design Team Member" },
    { photo: sachin, name: "Sachin", role: "Design Team, Video Editor" },
  ];

  const socialMedia = [
    { photo: tarun, name: "Tarun", role: "Social Media Manager" },
    { photo: Venkat, name: "Venkat", role: "Social Media Manager" },
  ];

  const [group, setGroup] = useState(tripCoordinators);

  return (
    <div
  className="d-flex flex-column align-items-center justify-content-center min-vh-100 w-100 overflow-hidden"
  style={{
    backgroundColor: "#190108",
    paddingTop: "6rem",
    paddingBottom: "3rem",
    width: "100vw",
    overflowX: "hidden"
  }}
>
  
    {/* Top Banner */}
    <motion.div
      className="position-relative text-center w-100 z-2"
      style={{ backgroundColor: "transparent", transition: "background-color 0.5s ease-in-out" }}
      whileHover={{ backgroundColor: "#190108" }}
    >
      <img
        className="img-fluid w-120"
        src={Nature}
        alt="Banner"
        style={{ width:"500rem", maxHeight: "800px", objectFit: "cover", filter: "brightness(95%)" }}
      />
      <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
        <h1 className="display-3 fw-bold text-black ">Team Novare</h1>
        {/* <p className="display-3 fw-bold text-black ">Meet the team</p> */}
      </div>
    </motion.div>

    {/* Founder & Club Head Section */}
    <div className="container py-5">
  <div className="row text-center justify-content-center">
    {[
      { name: "P S Harikrishnan", role: "Founder", photo: Harikrishnan },
      { name: "Swarna Sai Sumanth", role: "Club Head", photo: Swarna },
      { name: "Rithvik", role: "Club Head", photo: Rithvik },
    ].map((member, index) => (
      <div key={index} className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
        <div 
          className="bg-secondary rounded shadow-lg p-3 d-flex justify-content-center align-items-center" 
          style={{ width: "150%", maxWidth: "400px", minHeight: "280px" }}
        >
          <div 
            className="bg-white rounded p-4 d-flex flex-column align-items-center" 
            style={{ width: "90%", minHeight: "300px" }}
          >
            <img 
              src={member.photo} 
              alt={member.name} 
              className="img-fluid rounded-circle mb-3" 
              style={{ width: "300px", height: "300px", objectFit: "cover" }} 
            />
            <h5 className="text-dark">{member.name}</h5>
            <p className="text-muted">{member.role}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



    {/* Team Members Section */}
    <div className="container py-5">
  <ul className="nav nav-tabs justify-content-center mb-4">
    {[
      { label: "Trip Coordinators", data: tripCoordinators },
      { label: "Design Team", data: designTeam },
      { label: "Creative Team", data: creativeTeam },
      { label: "Social Media", data: socialMedia },
    ].map((item, index) => (
      <li className="nav-item" key={index}>
        <button
          className="nav-link text-light bg-dark border border-light rounded"
          onClick={() => setGroup(item.data)}
        >
          {item.label}
        </button>
      </li>
    ))}
  </ul>

  {/* Team Members Grid */}
  <div className="row row-cols-2 row-cols-md-4 g-3">
    {group.map((member, index) => (
      <div key={index} className="col d-flex justify-content-center">
        <div
          className="d-flex flex-column align-items-center p-3 bg-secondary text-white rounded shadow-lg"
          style={{ 
            width: "100%", 
            maxWidth: "250px", 
            minHeight: "300px", // Ensures all boxes have equal height
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img
            src={member.photo}
            alt={member.name}
            className="rounded-circle"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover", // Ensures uniform image appearance
              marginBottom: "10px",
            }}
          />
          <h5 className="text-center">{member.name}</h5>
          <p className="text-center text-light">{member.role}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  </div>

  );
}

