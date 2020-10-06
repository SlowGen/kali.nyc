import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <Link to="/home">
      <img src="images/logo-nav.png" />
    </Link>
    <nav>
      <div>
        <Link to="/home">
          <img src="images/home.png" />
        </Link>
        <Link to="/about">
          <img src="images/about.png" />
        </Link>
        <Link to="/work">
          <img src="images/work.png" />
        </Link>
        <Link to="/photos">
          <img src="images/photos.png" />
        </Link>
        <Link to="/msgme">
          <img src="images/msgme.png" />
        </Link>
      </div>
    </nav>
    <hr />
  </div>
)

export default Navbar
