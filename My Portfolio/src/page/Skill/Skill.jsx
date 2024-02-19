import Aboutme from "../../component/About/Aboutme";
import Experience from "../../component/About/Experience/Experience";
import ProjectSection from "../../component/About/Project/ProjectSection";
import Skills from "../../component/About/Skills";
import { motion } from "framer-motion";


const Skill = () => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: "-1%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, ease: [0.43, 0.13, 0.23, 0.96] }}

            >

                {/* About us section */}
                <Aboutme />
                {/* Skills */}
                <Skills />
                {/* Experience  Section */}
                <Experience />
                {/* Project Section */}
                <ProjectSection />
            </motion.div>
        </>
    )
}

export default Skill;