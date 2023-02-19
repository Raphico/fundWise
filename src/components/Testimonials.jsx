import { testimonials } from "../constants"
import Testimonial from "./Testimonial"

function Testimonials() {
  const testimonialElements = testimonials.map(testimonial => 
    <Testimonial 
      feedback={testimonial.feedback}
      name={testimonial.name}
      position={testimonial.position}
      img={testimonial.img}
    />)

  return (
    <section className="mt-page">
      <h2 className="testimonial-title | fs-500 fw-700 text-center">
        Testimonials
      </h2>

      <div className="testimonials flow-page">
        {testimonialElements}
      </div>
    </section>
  )
}

export default Testimonials
