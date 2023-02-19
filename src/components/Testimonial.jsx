import quote from "../assets/quote.svg"

function Testimonial(props) {
  return (
    <section className="flow">
      <div>
        <img src={quote} alt="double quote" />
      </div>

      <p>{props.feedback}</p>

      <div className="flex">
        <div>
          <img src={props.img} alt="person image" />
        </div>

        <div>
          <p className="fw-700">{props.name}</p>
          <p>{props.position}</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
