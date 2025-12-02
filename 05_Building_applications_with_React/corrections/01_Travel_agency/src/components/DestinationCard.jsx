import { Link } from "react-router-dom";

function DestinationCard({ destination:{image, title, slug, text} }) {
  return (
    <div>
        <figure>
            <img src={image} alt={title} />
        </figure>
        <div>
            <Link to={`/destinations/${slug}`}>{title}</Link>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default DestinationCard