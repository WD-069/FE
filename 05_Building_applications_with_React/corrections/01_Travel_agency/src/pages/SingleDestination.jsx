import { useParams } from "react-router-dom"
import { destinations } from "../data/destinations"
import NotFount from "./NotFount";

function SingleDestination() {
  const { slug } = useParams();

  const destination = destinations.find((dest) => dest.slug === slug);
  return (
    <div>
      {destination ? (
        <div>
          <h2>{destination.title}</h2>
          <img src={destination.image} alt={destination.title} />
          <p>{destination.text}</p>
        </div>
      ) : (
        <NotFount />
      )}
    </div>
  )
}

export default SingleDestination