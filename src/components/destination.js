const imagesContext = require.context(
    "../utils/Trails/Trail_Images",
    false,
    /\.png$/
  );
  
  const destinations = imagesContext.keys().map((path) => {
    const img = imagesContext(path);
    const title = path.replace("./", "").replace(".png", ""); // Extract name
  
    return { img, title };
  });
  
  export default destinations;
