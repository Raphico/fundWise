import GetStarted from "./GetStarted"
import hero from "../assets/hero.png"
import { motion } from "framer-motion"
import { staggerContainer, textVariant } from "../utils/motion"

function Hero() {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="hero even-columns mt-feature"
    >
      <div className="flow">
        <motion.h1 
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          className="fs-600 fw-700"
        >
          Your Partner in Smart Business Financing
        </motion.h1>
        <p>
          Our team of experts uses a methodology 
          to identify the best-customized financing
          solution that is likely to fit your business and needs.
        </p>
        <GetStarted />
      </div>

      <div className="visual-container">
        <img src={hero} alt="hero image" />
      </div>
    </motion.section>
  )
}
export default Hero