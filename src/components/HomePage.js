import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Ensure Link is imported
import TestimonialSection from "../utils/Testinomial";
import Calendar from "react-calendar";
import "./UpcomingEvents.css";
import destinations from "./destination";
import axios from "axios";

import Nature2 from "../images/Chimmony/Chimmony.jpeg";
import Nature3 from "../images/Munnar/Munnar.png";
import Nature from "../utils/Trails/dhoni/dhoni_1.jpg";


// const events = [
//   { img: chimmony, title: "Chimmony", date: new Date(2025, 2, 23) }, // April 5, 2025
//   { img: chokramudi, title: "Munnar", date: new Date(2025, 3, 10) }, // April 10, 2025
//   { img: dhoni, title: "Dhoni", date: new Date(2025, 3, 15) }, // April 15, 2025
//   { img: nelliyampathy, title: "Nelliyampathy", date: new Date(2025, 3, 20) }, // April 20, 2025
//   { img: parambikulam, title: "Parambikulam", date: new Date(2025, 3, 25) }, // April 25, 2025
//   { img: peechi, title: "Peechi", date: new Date(2025, 4, 1) }, // May 1, 2025
//   { img: chembra, title: "Chembra", date: new Date(2025, 4, 5) }, // May 5, 2025
//   { img: athirapally, title: "Athirapally", date: new Date(2025, 4, 10) }, // May 10, 2025

// ]




export default function TopDestinations() {
  const [setHoveredEvent] = useState(null);
  const [setPopupPosition] = useState({ top: 0, left: 0 });

  // const tileContent = ({ date, view }) => {
  //   if (view !== "month") return null; // Only show content in month view

  //   const event = events.find((e) =>
  //     new Date(e.date).toDateString() === date.toDateString()
  //   );

  //   if (event) {
  //     return (
  //       <div
  //         className="event-tile"
  //         style={{
  //           backgroundImage: `url(${event.img})`,
  //           backgroundSize: "cover",
  //           backgroundPosition: "center",
  //           width: "100%",  // Fully covers the date tile
  //           height: "100%", // Ensures full coverage
  //           borderRadius: "10px", // Consistent border radius
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           position: "relative"
  //         }}
  //       >
  //         <Link
  //           to={`/${event.title.toLowerCase().replace(/\s+/g, "-")}`}
  //           className="event-link"
  //           style={{
  //             width: "100%",
  //             height: "100%",
  //             display: "block"
  //           }}
  //         />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div
  //         className="normal-date"
  //         style={{
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           width: "100%",
  //           height: "100%",
  //           fontSize: "1.2rem",
  //           fontWeight: "bold",
  //           color: "white",
  //           background: "rgba(102, 12, 8, 0.66)",
  //           borderRadius: "10px"
  //         }}
  //       >
  //         {date.getDate()}
  //       </div>
  //     );
  //   }
  // };

  const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRQGDIGQpmQ044YNCaFapWhowujvXUYgUDFxPKN-VvkVdiLXKJJqX1_Nv9fPVJtapMXO82ks3mSiku8/pub?gid=0&single=true&output=csv"; // Replace with your CSV link

  const importImage = (title) => {
    try {
      return require(`../utils/Trails/Trail_Images/${title.replace(/\s+/g, "_")}.png`);
    } catch (err) {
      return require(Nature); // Use default if missing
    }
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(GOOGLE_SHEET_URL);
        const rows = response.data.split("\n").slice(1); // Skip header row

        const parsedEvents = rows
          .map((row) => {
            const [title, date] = row.split(",").map((col) => col.trim());
            if (!title || !date) return null; // Skip invalid rows

            const formattedDate = new Date(date); // Ensure correct date format
            const imgPath = importImage(title);

            console.log(`Loaded Event: ${title}, Date: ${formattedDate}, Image: ${imgPath}`);

            return {
              title,
              date: formattedDate,
              img: imgPath,
            };
          })
          .filter(Boolean);

        setEvents(parsedEvents);
      } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
      }
    };

    fetchEvents();
  }, []);

  const tileContent = ({ date, view }) => {
    if (view !== "month") return null;
  
    const formattedDate = date.toISOString().split("T")[0];
  
    // Find events for this date
    const eventsForDate = events.filter((e) => {
      const eventDate = new Date(e.date).toISOString().split("T")[0];
      return eventDate === formattedDate;
    });
  
    return eventsForDate.length > 0 ? (
      <div className="event-tile">
        {eventsForDate.map((event, index) => (
          <Link key={index} to={`/${event.title.replace(/\s+/g, "_").toLowerCase()}`} className="event-link">
            <div className="event-image" style={{ backgroundImage: `url(${event.img})` }} />
          </Link>
        ))}
      </div>
    ) : (
      <div className="normal-date">{date.getDate()}</div>
    );
  };
  
  







  const slidesToShow = 1; // Number of images visible at a time
  const totalSlides = Math.ceil(destinations.length / slidesToShow)-3;
  const slidesToShow_2 = 1; // Number of images visible at a time
  const totalSlides_2 = Math.ceil(destinations.length / slidesToShow_2);



  const [index, setIndex] = useState(0);

  // Move left
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Move right
  const nextSlide = () => {
    setIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <motion.div
        style={{ backgroundColor: "#190108", color: "white" }}
        className="z-2 position-relative"
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 1000, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Main Carousel */}



        <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
  {/* Indicators */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  {/* Carousel Content */}
  <div className="carousel-inner">
    {/* Slide 1 */}
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={Nature2} className="d-block w-100 carousel-img" alt="Chimmony" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Chimmony</h5>
        <p>Explore the untouched beauty of Chimmony Wildlife Sanctuary.</p>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="carousel-item" data-bs-interval="3000">
      <img src={Nature} className="d-block w-100 carousel-img" alt="Dhoni" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Dhoni</h5>
        <p>A scenic trek through lush green trails of Dhoni waterfalls.</p>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="carousel-item" data-bs-interval="3000">
      <img src={Nature3} className="d-block w-100 carousel-img" alt="Munnar" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Munnar</h5>
        <p>Witness the breathtaking tea plantations of Munnar.</p>
      </div>
    </div>
  </div>
</div>









        <div className="container my-5">
          {/* Header with Buttons */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-white mb-2" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              <span style={{ padding: "0.5rem" }}>Top Destination</span>
            </h2>
            <div style={{ color: "white" }}>
              <button className="btn p-2" onClick={prevSlide} style={{ color: "white" }}>
                <ChevronLeft size="1.5rem" />
              </button>
              <button className="btn p-2" onClick={nextSlide} style={{ color: "white" }}>
                <ChevronRight size="1.5rem" />
              </button>
            </div>
          </div>

          {/* Sliding Destinations */}
          <div className="overflow-hidden" style={{ height: "20rem" }}>
            <div
              className="d-flex"
              style={{
                transform: `translateX(-${index * (100/5)}%)`,
                transition: "0.5s ease-in-out",
                gap: "0.5rem",
                width: `${(destinations.length / 2) * 100}%`,
              }}
            >
              {destinations.map((dest, i) => (
                <Link to={`/${dest.title.toLowerCase()}`} key={i} style={{ textDecoration: "none", width: "30%" }}>
                  <div
                    className="position-relative flex-shrink-0 d-flex align-items-end"
                    style={{
                      width: "100%",
                      height: "30rem",
                      borderRadius: "2rem",
                      overflow: "hidden",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    {/* Image */}
                    <motion.img
                      src={dest.img}
                      alt={dest.title}
                      className="w-100 h-100 object-fit-cover"
                      whileHover={{ scale: 1.1 }}
                    />


                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>



        <div>
          <TestimonialSection />
        </div>


        <div className="container my-5">
          {/* Header with Buttons */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-white mb-2" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              <span style={{ padding: "0.5rem" }}>Recommended</span>
            </h2>
            <div style={{ color: "white" }}>
              <button className="btn p-2" onClick={prevSlide} style={{ color: "white" }}>
                <ChevronLeft size="1.5rem" />
              </button>
              <button className="btn p-2" onClick={nextSlide} style={{ color: "white" }}>
                <ChevronRight size="1.5rem" />
              </button>
            </div>
          </div>

          {/* Sliding Destinations */}
          <div className="overflow-hidden" style={{ height: "70vh" }}>
            <div
              className="d-flex"
              style={{
                transform: `translateX(-${index * (100 / totalSlides_2)}%)`, // Moves correctly
                transition: "transform 0.5s ease-in-out",
                gap: "1rem",
                width: `${(destinations.length / slidesToShow_2) * 100}%`, // Proper width
              }}
            >
              {destinations.map((dest, i) => (
                <Link to={`/${dest.title.toLowerCase()}`} key={i} style={{ textDecoration: "none", width: `${100 / slidesToShow_2}%` }}>
                  <div
                    className="position-relative flex-shrink-0 d-flex align-items-end"
                    style={{
                      width: "100%",
                      height: "60vh",
                      borderRadius: "2rem",
                      overflow: "hidden",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    {/* Image */}
                    <motion.img
                      src={dest.img}
                      alt={dest.title}
                      className="w-100 h-100 object-fit-cover"
                      whileHover={{ scale: 1.08 }}
                    />

                    {/* Title */}
                    <motion.div
                      className="position-absolute bottom-0 w-100 p-3 text-center"
                      style={{
                        background: "rgba(128, 128, 128, 0.7)",
                        borderRadius: "0 0 2rem 2rem",
                        transition: "0.3s ease-in-out",
                      }}
                    >
                      <h5 className="mb-0" style={{ color: "black", fontWeight: "bold" }}>
                        {dest.title}
                      </h5>
                    </motion.div>
                  </div>
                </Link>
              ))}
            </div>
          </div>



        </div>


        {/* Calendar Section */}
        <div className="calendar-container">
          <h2 className="calendar-title">Upcoming Events</h2>
          <Calendar tileContent={tileContent} />
        </div>



      </motion.div>
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}