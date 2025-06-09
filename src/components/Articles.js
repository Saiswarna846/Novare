import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";
import article1 from "../images/article1.jpg";
import article2 from "../images/article1.jpg"; 
import article3 from "../images/article1.jpg";

export default function Articles() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const articles = [
    {
      picurl: article1,
      articleLink: "/article1",
      title: "Why being fit matters for trekking?",
      desc: "Trekking is an exciting outdoor activity that lets you explore nature and push your limits. To fully enjoy trekking, it's important to be physically fit.",
      trundesc: "In this blog, we'll discuss why fitness is crucial for trekking and how it can enhance your overall experience.",
    },
    {
      picurl: article2,
      articleLink: "/article2",
      title: "Best places for trekking in 2024",
      desc: "Discover some of the best trekking destinations for this year.",
      trundesc: "Explore breathtaking locations that will challenge and inspire you.",
    },
    {
      picurl: article3,
      articleLink: "/article3",
      title: "How to pack efficiently for a trek?",
      desc: "Packing light but ensuring you have essentials is crucial.",
      trundesc: "Read this guide to optimize your trekking backpack.",
    },
  ];

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 px-3"
      style={{ 
        backgroundColor: "#190108", 
        paddingTop: "6rem", 
        paddingBottom: "3rem", 
        width: "100vw", 
        overflowX: "hidden" 
      }}
    >
      <motion.div
        className={`container${isMobile ? "" : "-fluid"} d-flex flex-column align-items-center w-100`}
        style={{
          background: "#808080",
          borderRadius: "40px",
          color: "white",
          maxWidth: isMobile ? "" : "1200px",
          padding: "1rem"
        }}
        initial={{ x: -2000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 1000, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      >
        <div className="w-100 p-4">
          {isMobile ? (
            <div className="row g-4 justify-content-center">
              {articles.map((article, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                  <div className="card w-100" style={{ maxWidth: "350px" }}>
                    <img src={article.picurl} alt={article.title} className="img-fluid rounded-top" style={{ maxHeight: "200px", objectFit: "cover" }} />
                    <div className="card-body text-center">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.trundesc}</p>
                      <a href={article.articleLink} className="btn btn-primary">Read More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  picurl={article.picurl}
                  articleLink={article.articleLink}
                  title={article.title}
                  desc={article.desc}
                  trundesc={article.trundesc}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}