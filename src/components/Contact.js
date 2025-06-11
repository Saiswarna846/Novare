import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{
        backgroundColor: "#190108",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        width: "100vw",
      }}
    >
      <div className="text-center text-white container">
        <h1 className="display-3" style={{ paddingTop: "4rem" }}>Contact Us</h1>
        <p className="fw-light" style={{ maxWidth: "800px", margin: "auto", paddingBottom: "2rem" }}>
          For any collaborations, partnerships, or queries, feel free to reach out to us!
        </p>
      </div>

      {/* Contact Section */}
      
      <div className="container py-5">
      <div className="row g-4 text-center">
        {[
          {
            icon: <FaInstagram size={40} color="white" />, 
            title: "Follow us on Instagram", 
            text: "Stay updated with our latest adventures and events.", 
            link: "https://instagram.com/novare_iitpkd",
            bgColor: "#E4405F" // Instagram Pinkish-Red
          },
          {
            icon: <FaEnvelope size={40} color="white" />, 
            title: "Email Us", 
            text: "Contact us for inquiries or collaboration.", 
            link: "mailto:novare@iitpkd.ac.in",
            bgColor: "#D44638" // Gmail Red
          },
          {
            icon: <FaMapMarkerAlt size={40} color="white" />, 
            title: "Our Location", 
            text: "IIT Palakkad, Kerala, India", 
            link: "https://www.google.com/maps/dir//IIT+Palakkad",
            bgColor: "#34A853" // Google Maps Green
          }
        ].map((item, index) => (
          <div key={index} className="col-md-4 d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center p-4 shadow-lg border-0 rounded" 
              style={{ backgroundColor: "#fff", color: "#222", width: "100%", maxWidth: "300px", borderRadius: "10px" }}>
              
              {/** Clickable Colorful Icon in a Circle **/}
              <motion.div
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ 
                  width: "90px", height: "90px", 
                  backgroundColor: item.bgColor, 
                  cursor: "pointer" 
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open(item.link, "_blank")}
              >
                {item.icon}
              </motion.div>

              <h5 className="my-3">{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>



    </div>
  );
}
