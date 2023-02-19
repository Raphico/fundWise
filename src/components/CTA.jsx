import GetStarted from "./GetStarted"

function CTA() {
  return (
    <section className="cta bg-dark-gradient box-shadow flex mt-page">
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
    </section>
  )
}
export default CTA