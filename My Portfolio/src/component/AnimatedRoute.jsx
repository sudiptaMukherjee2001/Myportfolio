import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../page/Home/Home";

import { AnimatePresence } from "framer-motion";
// import { AnimatePresence } from "framer-motion/dist/framer-motion";ss
import Skill from "../page/Skill/Skill";
import Contactus from "../page/Contactus/Contactus";

export default function AnimatedRoute() {
    const location = useLocation();
    console.log("This is from ANiMATED ROUTE", location.pathname);
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Skill />} />
                <Route path="/contact" element={<Contactus />} />
            </Routes >
        </AnimatePresence>
    );
}
