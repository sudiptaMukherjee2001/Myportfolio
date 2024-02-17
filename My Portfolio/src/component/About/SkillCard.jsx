import { SkillCards } from "../../style/Skill_card_style";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SkillCard = ({ skillName, svg }) => {
    const [isVisible, setIsVisible] = useState(false);
    const skillCardRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const top = skillCardRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            setIsVisible(top < windowHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <motion.div
                ref={skillCardRef}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.7 }}
            >
                <SkillCards>
                    <Typography color={"whitesmoke"} fontSize={"1.3rem"} fontWeight={600}>
                        {skillName}
                    </Typography>
                    {svg}
                </SkillCards>
            </motion.div>
        </>
    );
};

SkillCard.propTypes = {
    skillName: PropTypes.string.isRequired,
    svg: PropTypes.element.isRequired,
};

export default SkillCard;
