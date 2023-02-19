import GetStarted from "./GetStarted"

function Feature(props) {
  return (
    <section className="even-columns mt-feature">
      <div className="flow">
        <h2 className="fs-500 fw-700">
          {props.title}
        </h2>
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
