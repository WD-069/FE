import { DestinationCard } from "../components";
import { destinations } from "../data/destinations";

function Destinations() {
  return (
    <div>
      <section>
        <h1>All Destinations</h1>
        <p>Descover all of the possible destinations!</p>
      </section>
      <section>
        {destinations.map((destination) => <DestinationCard key={destination.title} destination={destination} /> )}
      </section>
    </div>
  )
}

export default Destinations;