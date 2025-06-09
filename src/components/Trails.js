import TrailCard from "./TrailCard";

// Import all images dynamically
const importAll = (r) => {
  let images = {};
  r.keys().forEach((fileName) => {
    const key = fileName.replace("./", "").replace(".png", ""); // Remove path and extension
    images[key] = r(fileName);
  });
  return images;
};

const trailImages = importAll(require.context("../utils/Trails/Trail_Images", false, /\.png$/));

const places = Object.keys(trailImages).map((place) => ({
  place_name: place.replace(/_/g, " "), // Convert underscores to spaces if needed
  image: trailImages[place],
}));

export default function Trails() {
  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{ 
        backgroundColor: "#190108", 
        paddingTop: "6rem", 
        paddingBottom: "7rem", 
        width: "100vw", 
        overflowX: "hidden" 
      }}
    >
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 text-center">
          {places.map((trail, index) => (
            <TrailCard 
              key={index} 
              trailLink={`/${trail.place_name.toLowerCase().replace(/\s+/g, "")}`} 
              picurl={trail.image} 
              // title={trail.place_name} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
