import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from "./HomePage";
import Trails from "./Trails";
import Gallery from "./Gallery";
import Articles from "./Articles";
import Team from "./Team";
import About from "./About";
import Contact from "./Contact";
import TrailContent from "./TrailContent";
import ArticleContent from "./ArticleContent";
import details from "../utils/trailcontentsDetails";
import artdetails from "../articlecontents";
import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
    const location = useLocation()
    const trailroutes = Object.keys(details).map((key) => (
        <Route key={key} path={`/${key}`} element={<TrailContent url={key} />} />
    ));
    const articleroutes = Object.keys(artdetails).map((key) => (
        <Route key={key} path={`/${key}`} element={<ArticleContent url={key} />} />
    ));
    return (
        // <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/trails" element={<Trails />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/team" element={<Team />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {trailroutes}
                {articleroutes}
            </Routes>
        // </AnimatePresence>
    )
}