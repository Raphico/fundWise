import { features } from "../constants"
import Feature from "./Feature"

function Features() {
  const featureElements = features.map(feature => <Feature 
    key={feature.title}
    title={feature.title}
    feature={feature.feature}
    img={feature.img} 
  />)

  return (
    <section id="features">
      {featureElements}
    </section>
  )
}
export default Features