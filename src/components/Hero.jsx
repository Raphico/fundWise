import GetStarted from "./GetStarted"
import hero from "../assets/hero.png"

function Hero() {
  return (
    <section className="hero even-columns mt-feature">
      <div className="flow">
        <h1 className="fs-600 fw-700">
          Your Partner in Smart Business Financing
        </h1>
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
    </section>
  )
}
export default Hero