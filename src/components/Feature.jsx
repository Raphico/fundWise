import GetStarted from "./GetStarted"
import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"

function Feature(props) {
  return (
    <section className="even-columns mt-feature">
      <div className="flow">
        <h2>
          {props.title}
        </h2>
        <p>{props.feature}</p>
        <GetStarted />
      </div>

      <motion.div 
        variants={slideIn("right")}
        initial="hidden"
        whileInView="show"
        className="visual-container"
      >
        <img src={props.img} alt="feature image" />
      </motion.div>
    </section>
  )
}

export default Feature
