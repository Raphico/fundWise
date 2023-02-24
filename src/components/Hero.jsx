import GetStarted from "./GetStarted"
import hero from "../assets/hero.png"
import { motion } from "framer-motion"
import { variants, slideIn } from "../utils/motion"

function Hero() {
  return (
    <motion.section 
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="hero even-columns mt-feature"
    >
      <motion.div 
        variants={slideIn("left")}
        initial="hidden"
        whileInView="show"
        className="flow"
      >
        <h1 className="fs-600 fw-700">
          Your Partner in Smart Business Financing
        </h1>
        <p>
          Our team of experts uses a methodology 
          to identify the best-customized financing
          solution that is likely to fit your business and needs.
        </p>
        <GetStarted />
      </motion.div>

      <motion.div 
        variants={slideIn("right")}
        initial="hidden"
        whileInView="show"
        className="visual-container"
      >
        <img src={hero} alt="hero image" />
      </motion.div>
    </motion.section>
  )
}
export default Hero