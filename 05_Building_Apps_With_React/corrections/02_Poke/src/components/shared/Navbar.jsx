import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-primary">
        <div className="container mx-auto">
            <Link to="/">Pokedex</Link>
        </div>
    </nav>
  )
}

export default Navbar;