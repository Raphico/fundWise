import { clients } from "../constants"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

function Clients() {
  const clientElements = clients.map(client => 
    <img 
      key={client.id}
      src={client.img}
      alt="client"
    />
    )

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="show" 
      id="clients" 
      className="clients mt-page"
    >
      {clientElements} 
    </motion.section>
  )
}

export default Clients
