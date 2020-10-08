import React from 'react'
import {Link} from 'react-router-dom'
import {Flex} from 'rebass'

const Navbar = () => (
  <div id="bar">
    <Flex justifyContent="center">
      <nav className="navlinks">
        <Link to="/home">
          <img className="navlogo" src="images/longbanner.png" />
        </Link>
      </nav>
    </Flex>
    <hr />
  </div>
)

export default Navbar
