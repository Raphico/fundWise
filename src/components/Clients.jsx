import { clients } from "../constants"

function Clients() {
  const clientElements = clients.map(client => 
    <img 
      key={client.id}
      src={client.img}
      alt="client"
    />
    )

  return (
    <section className="clients mt-page">
      {clientElements} 
    </section>
  )
}

export default Clients
