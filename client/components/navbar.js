import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>SLOWGEN</h1>
    <nav>
      <div>
        <Link to="/home">Home</Link>
      </div>
    </nav>
    <hr />
  </div>
)

export default Navbar
