import React, {useState} from 'react'
import {Box, Image} from 'rebass'

/**
 * COMPONENT
 */
export const Home = () => {
  const homePink = 'images/home-logo-top.png'
  const homePurple = 'images/home-logo-bottom.png'

  const [homeTile, setHomeTile] = useState(homePink)

  return (
    <Box>
      <Image
        src={homeTile}
        maxHeight={700}
        onMouseEnter={() => setHomeTile(homePurple)}
        onMouseLeave={() => setHomeTile(homePink)}
      />
    </Box>
  )
}

export default Home
