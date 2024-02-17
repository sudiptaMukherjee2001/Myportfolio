import Contactme from "../../component/Contactus/Contactme"
import { motion } from "framer-motion";
const Contactus = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
            <Contactme />
        </motion.div>
    )
}

export default Contactus