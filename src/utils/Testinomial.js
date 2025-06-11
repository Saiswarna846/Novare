import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronUp, FaChevronDown, FaQuoteLeft } from "react-icons/fa";

// Import images for testimonials
import person1 from "../images/Aishwarya_Kase.jpg";
import person2 from "../images/Anusha_Dadam.jpg";
import person3 from "../images/Vishwas_Vasisht.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Jasmine Holland",
    text: "Novare has completely changed my perspective on trekking. Their dedication to safety and client satisfaction made the experience unforgettable. I highly recommend them to anyone looking to explore the beauty of southern India.",
    image: person1,
  },
  {
    id: 2,
    name: "Michael Carter",
    text: "The trek was an absolute adventure! The guides were experienced, and the views were breathtaking. Novare exceeded my expectations in every way.",
    image: person2,
  },
  {
    id: 3,
    name: "Sophia Reynolds",
    text: "An unforgettable experience! The trails, the people, and the atmosphere were incredible. I would love to do it again!",
    image: person3,
  },
];

export default function TopDestinations() {
  const [index, setIndex] = useState(0);
  const [sectionHeight, setSectionHeight] = useState("320px"); // Default for mobile
  const [paddingSize, setPaddingSize] = useState("1rem");
  const [imageSize, setImageSize] = useState("9rem"); // Default small image

  // Detect screen size & set dynamic styles
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) {
        setSectionHeight("400px"); // Larger section for laptops
        setPaddingSize("2rem");
        setImageSize("14rem"); // Bigger image for large screens
      } else {
        setSectionHeight("500px"); // Smaller section for mobile
        setPaddingSize("1rem");
        setImageSize("9rem"); // Smaller image for mobile
      }
    };

    updateSize(); // Set initial size
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize); // Cleanup
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container my-5 d-flex align-items-center justify-content-center">
      {/* Main Card */}
      <div
        className="d-flex flex-column flex-lg-row align-items-center w-100"
        style={{
          background: "grey",
          borderRadius: "2rem",
          color: "white",
          maxWidth: "60rem",
          height: sectionHeight, // Dynamic height
          padding: paddingSize, // Dynamic padding
          overflow: "hidden",
        }}
      >
        {/* Left Section: Testimonials */}
        <div className="w-100 w-lg-50 p-2 text-center text-lg-start">
          <motion.div className="p-2 rounded">
            <FaQuoteLeft size="2rem" color="white" />
            <h5 className="mt-2" style={{ fontSize: "1.4rem" }}>
              {testimonials[index].name}
            </h5>
            <p
              style={{
                fontSize: "1rem",
                minHeight: "90px", // Prevents layout shift when text length varies
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {testimonials[index].text}
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-center justify-content-lg-start mt-2">
            <button className="btn p-2 mx-1 bg-white text-dark" onClick={prevSlide}>
              <FaChevronUp size="1.2rem" />
            </button>
            <button className="btn p-2 mx-1 bg-white text-dark" onClick={nextSlide}>
              <FaChevronDown size="1.2rem" />
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div
          className="w-100 w-lg-50 d-flex justify-content-center mt-3 mt-lg-0"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100px",
          }}
        >
          <motion.img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="object-fit-cover"
            style={{
              width: imageSize, // Dynamically controlled size
              height: imageSize,
              borderRadius: "50%",
              border: "4px solid white",
              objectFit: "cover",
            }}
            key={index}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
