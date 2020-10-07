import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div id="bar">
    <nav className="navlinks">
      <div className="navdiv">
        <Link to="/home">
          <img className="navlogo" src="images/banner.png" />
        </Link>
        <Link to="/home">
          <img className="navimg" src="images/home.png" />
        </Link>
        <Link to="/about">
          <img className="navimg" src="images/about.png" />
        </Link>
        <Link to="/work">
          <img className="navimg" src="images/work.png" />
        </Link>
        <Link to="/photos">
          <img className="navimg" src="images/photos.png" />
        </Link>
        <Link to="/msgme">
          <img className="navimg" src="images/msgme.png" />
        </Link>
      </div>
    </nav>
    <hr />
  </div>
)

export default Navbar
