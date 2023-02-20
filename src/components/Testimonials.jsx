import { testimonials } from "../constants"
import Testimonial from "./Testimonial"
import { motion } from "framer-motion"
import { fadeIn, textVariant2 } from "../utils/motion"

function Testimonials() {
  const testimonialElements = testimonials.map(testimonial => 
    <Testimonial 
      key={testimonial.feedback}
      feedback={testimonial.feedback}
      name={testimonial.name}
      position={testimonial.position}
      img={testimonial.img}
    />)

  return (
    <motion.section 
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      id="testimonials" 
      className="mt-page"
    >
      <motion.h2 
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="testimonial-title | fs-500 fw-700 text-center"
      >
        Testimonials
      </motion.h2>

      <div className="testimonials flow-page">
        {testimonialElements}
      </div>
    </motion.section>
  )
}

export default Testimonials
