import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <nav>
            <h6>Services</h6>
            <Link to='/'>Destinations</Link>
        </nav>
        <nav>
            <h6>Company</h6>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
        <nav>
            <h6>Legal</h6>
            <Link to='/terms'>Terms of Service</Link>
            <Link to='/privacy'>Privacy Policy</Link>
        </nav>
    </footer>
  )
}

export default Footer