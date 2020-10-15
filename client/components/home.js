import React, {useState} from 'react'
import {Box, Image, Flex} from 'rebass'

/**
 * COMPONENT
 */
export const Home = () => {
  const homePink = 'images/home-logo-top.png'
  const homePurple = 'images/home-logo-bottom.png'

  const [homeTile, setHomeTile] = useState(homePink)

  return (
    <Flex justifyContent="center">
      <Box alignContent="center" ml="-10%">
        <Image
          src={homeTile}
          maxHeight={500}
          onMouseEnter={() => setHomeTile(homePurple)}
          onMouseLeave={() => setHomeTile(homePink)}
        />
      </Box>
    </Flex>
  )
}

export default Home
