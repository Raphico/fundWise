import GetStarted from "./GetStarted"
import { motion } from "framer-motion"
import { textVariant2 } from "../utils/motion"

function Feature(props) {
  return (
    <section className="even-columns mt-feature">
      <div className="flow">
        <motion.h2 
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="fs-500 fw-700"
        >
          {props.title}
        </motion.h2>
        <p>{props.feature}</p>
        <GetStarted />
      </div>

      <div className="visual-container">
        <img src={props.img} alt="feature image" />
      </div>
    </section>
  )
}

export default Feature
