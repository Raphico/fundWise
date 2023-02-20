import { CTAVariants } from "../utils/motion"
import GetStarted from "./GetStarted"
import { motion } from "framer-motion"

function CTA() {
  return (
    <motion.section 
      variants={CTAVariants}
      initial="hidden"
      whileInView="show"
      className="cta bg-dark-gradient box-shadow flex mt-page"
    >
      <div className="cta-content flow">
        <h2 className="fs-500 fw-700">
          Try Our Service Right Now
        </h2>
        <p>
          Everything you need to Identify the 
          best-financing solution that 
          will likely fit your need and business.
        </p>
      </div>
      <GetStarted />
    </motion.section>
  )
}
export default CTA