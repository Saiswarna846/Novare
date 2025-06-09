import { useEffect, useState } from "react";
import details from "../utils/trailcontentsDetails";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/styles.css";
import trailImages, { Nature } from "../utils/Trails/trailImages";





export default function TrailContent(props) {
    const { url } = props;
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);




    const [isHovered, setIsHovered] = useState(false);

    const colorChange = {
        fill: isHovered ? "limegreen" : "#4c555e",
    };

    const [isHovered1, setIsHovered1] = useState(false);

    const colorChange1 = {
        fill: isHovered1 ? "limegreen" : "#4c555e",
    };

    const [isHovered2, setIsHovered2] = useState(false);

    const colorChange2 = {
        fill: isHovered2 ? "limegreen" : "#4c555e",
    };
    const [isHovered3, setIsHovered3] = useState(false);

    const colorChange3 = {
        fill: isHovered3 ? "limegreen" : "#4c555e",
    };
    const [isHovered4, setIsHovered4] = useState(false);

    const colorChange4 = {
        fill: isHovered4 ? "limegreen" : "#4c555e",
    };
    const [isHovered5, setIsHovered5] = useState(false);

    const colorChange5 = {
        fill: isHovered5 ? "limegreen" : "#4c555e",
    };

    const trailDetails = details[props.url] || {}; // Get trail details dynamically
    const trailName = trailDetails.name || props.url; // Ensure correct capitalization


    const getBackgroundImage = (title) => {
        return trailImages[title?.toLowerCase()] || Nature; // Ensuring lowercase comparison & default fallback
    };
    useEffect(() => {
        try {
            console.log("Loading images from folder:", `../utils/Trails/${url}/`);

            const imagesContext = require.context(
                `../utils/Trails/${url}/`, // Folder path
                false, // Do not search subdirectories
                /\.(png|jpe?g|webp)$/ // Match image formats
            );

            console.log("Found images:", imagesContext.keys()); // Log available images

            const sortedImages = imagesContext.keys().map((imgPath) => imagesContext(imgPath));

            console.log("Resolved image paths:", sortedImages); // Debugging

            setImages(sortedImages);
        } catch (error) {
            console.error("Error loading images:", error);
        }
    }, [url]);

    const numImages = details[props.url]?.number || 5; // Default to 5 if undefined
    const slidesToShow = 2; // Number of images visible at a time

    const prevSlide = () => {
        setIndex((prev) => (prev - slidesToShow < 0 ? numImages - slidesToShow : prev - slidesToShow));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev + slidesToShow >= numImages ? 0 : prev + slidesToShow));
    };

    for (const key in details) {
        console.log(key);
        if (props.url === key) {


            return (

                <div>
                    <img
                        className="img-fluid position-fixed top-0 start-0 w-100 h-100"
                        src={getBackgroundImage(key) || Nature} // Default image if no match is found
                        alt="Default Background"
                        style={{ objectFit: "cover", zIndex: "-1" }}
                    />
                    <div className="position-relative z-2 d-flex flex-column justify-content-center align-items-center text-white text-center vh-100">

                    </div>

                    <div
                        className="z-2 position-relative "
                        style={{ backgroundColor: "#F6F6F6 ", paddingTop: "rem" }}
                    >
                        <div className="container">
                            <div className="pt-4">
                                <p className="display-5 text-center">Trecking info</p>
                            </div>
                            <div className="row p-3 text-center">
                                <div className="distance col ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="64"
                                        height="64"
                                        fill="#4c555e"
                                        className="bi bi-person-walking"
                                        viewBox="0 0 16 16"
                                        style={colorChange1}
                                        onMouseEnter={() => setIsHovered1(true)}
                                        onMouseLeave={() => setIsHovered1(false)}
                                    >
                                        <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.75 1.75 0 0 1-.088.395l-.318.906.213.242a.75.75 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
                                        <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.75.75 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914l2.345-3.048Zm4.22-4.215-.494-.494.205-1.843a1.93 1.93 0 0 0 .006-.067l1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
                                    </svg>
                                    <div className="pt-2">{details[key].distance}</div>
                                    <div className="pt-3 " style={{ color: "limegreen" }}>{details[key].Distance}</div>
                                </div>

                                <div className="duration col">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="64"
                                        height="64"
                                        fill="#4c555e"
                                        className="bi bi-clock"
                                        viewBox="0 0 16 16"
                                        style={colorChange2}
                                        onMouseEnter={() => setIsHovered2(true)}
                                        onMouseLeave={() => setIsHovered2(false)}
                                    >
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                    </svg>
                                    <div className="pt-2"> {details[key].time}</div>
                                    <div className="pt-3 " style={{ color: "limegreen" }}>{details[key].Duration}</div>
                                </div>
                                <div className="how_to_reach col">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="64"
                                        height="64"
                                        fill={isHovered ? "limegreen" : "#4c555e"}
                                        className="bi bi-geo-alt"
                                        viewBox="0 0 16 16"
                                        style={colorChange3}
                                        onMouseEnter={() => setIsHovered3(true)}
                                        onMouseLeave={() => setIsHovered3(false)}
                                        onClick={() => {
                                            const destination = encodeURIComponent(details?.[key]?.map_place || "");
                                            if (destination) {
                                                window.open(`https://www.google.com/maps/dir/IIT+Palakkad/${key}`, "_blank");
                                            } else {
                                                alert("Destination not available.");
                                            }
                                        }}
                                    // style={{ cursor: "pointer" }}

                                    >
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                    <div className="pt-2">How to reach</div>

                                </div>

                                {/* <div className="attractions col">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="64"
                                            height="64"
                                            fill="#4c555e"
                                            className="bi bi-emoji-heart-eyes"
                                            viewBox="0 0 16 16"
                                            style={colorChange4}
                                            onMouseEnter={() => setIsHovered4(true)}
                                            onMouseLeave={() => setIsHovered4(false)}
                                        >
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
                                        </svg>
                                        <div className="pt-2">Attractions</div>
                                        <div className="pt-3 " style={{ color: "limegreen" }}>{details[key].Attractions}</div>
                                    </div> */}
                                <div className="best_season col">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="64"
                                        height="64"
                                        fill="#4c555e"
                                        className="bi bi-cloud-sun-fill"
                                        viewBox="0 0 16 16"
                                        style={colorChange5}
                                        onMouseEnter={() => setIsHovered5(true)}
                                        onMouseLeave={() => setIsHovered5(false)}
                                    >
                                        <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                                        <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                                    </svg>
                                    <div className="pt-2">Best season to trek</div>
                                    <div className="pt-3 " style={{ color: "limegreen" }}>{details[key].Best_season_to_trek}</div>
                                </div>
                                <div className="difficulty col">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="64"
                                        height="64"
                                        fill="#4c555e"
                                        className="bi bi-speedometer2"
                                        viewBox="0 0 16 16"
                                        style={colorChange}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                        <path
                                            fill-rule="evenodd"
                                            d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                                        />
                                    </svg>
                                    <div className="pt-2">Difficulty level</div>
                                    <div className="pt-3 " style={{ color: "limegreen" }}>{details[key].Difficulty_level}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* trecking info end  */}


                    {/* content part  */}
                    <div className="bg-white text-black">
                        <div className="container text-left">
                            <div className="fs-5">
                                <p className="p-3 mb-0">{details[key].content}</p>
                            </div>
                        </div>


                    </div>
                    {/* content part end  */}


                    {/* Itinerary Section in a Box */}
                    <div className="design-section flex justify-center">
                        <div className="design w-full max-w-3xl px-4">
                            <div className="timeline">
                                <h3 className="text-center text-xl font-semibold pb-4 text-white">
                                    Itinerary from IIT Palakkad
                                </h3>

                                {/* Timeline Middle Divider */}
                                <div className="flex justify-center">
                                    <div className="timeline-middle w-1 bg-gray-500"></div>
                                </div>

                                {/* Timeline Content */}
                                <div className="timeline-content text-center">
                                    {details[key] && details[key].itinerary
                                        ? details[key].itinerary.split("\n").map((line, index) => (
                                            <p key={index} className="text-gray-300">{line}</p>
                                        ))
                                        : <p className="text-gray-400">No itinerary available</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="z-2 position-relative" style={{ backgroundColor: "#1F1F1F" }}>
                        <div className="bg-gray text-black">
                            <div className="fs-1 container">
                                <h1 className="m-0 pt-3 text-center display-5 text-white">Gallery</h1>

                                <div className="container my-5 bg-white text-black">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h2 className="text-black mb-4">{url} Gallery</h2>
                                        <div>
                                            <button className="btn p-2" onClick={prevSlide} disabled={images.length <= 1}>
                                                <ChevronLeft size={32} />
                                            </button>
                                            <button className="btn p-2" onClick={nextSlide} disabled={images.length <= 1}>
                                                <ChevronRight size={32} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden" style={{ height: "50vh" }}>
                                        <div
                                            className="d-flex"
                                            style={{
                                                transform: `translateX(-${index * 100}%)`,
                                                transition: "0.5s ease-in-out",
                                                width: `${images.length * 100}%`,
                                                gap: "20px",
                                            }}
                                        >
                                            {images.length > 0 ? (
                                                images.map((img, i) => (
                                                    <img
                                                        key={i}
                                                        src={img}
                                                        alt={`Slide ${i}`}
                                                        className="w-100 h-100 border border-danger"
                                                        style={{ objectFit: "cover", display: "block", width: "500px", height: "500px" }}
                                                    />
                                                ))
                                            ) : (
                                                <p className="text-center w-100 text-white">No images found.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            );
        }
    }
}
