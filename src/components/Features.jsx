import { features } from "../constants"
import Feature from "./Feature"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

function Features() {
  const featureElements = features.map(feature => <Feature 
    key={feature.title}
    title={feature.title}
    feature={feature.feature}
    img={feature.img} 
  />)

  return (
    <motion.section 
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      id="features"
    >
      {featureElements}
    </motion.section>
  )
}
export default Features