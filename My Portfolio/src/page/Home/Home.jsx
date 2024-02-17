import Hero from "../../component/Home/Hero";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
const Home = () => {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: "-1%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, ease: [0.43, 0.13, 0.23, 0.96] }}
            >


                <Hero />
            </motion.div>
        </>
    )
}

export default Home;