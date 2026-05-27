import logo1 from '../assets/download.jpg'
import './Navigation.css'
import { Link } from 'react-router-dom' // Ensure this is here!

export default function NavigationArea() {
  return (
    <nav className="navBar">
      <div className="logoHolder">
        <Link to="/">
          <img src={logo1} className="topLogo" alt="Logo" />
        </Link>
      </div>

      <ul className="menuTop">
        {/* The Link MUST be inside the <li> and wrap the text */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/contact">Contacts</Link></li>
      </ul>
    </nav>
  )
}