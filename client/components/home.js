import React, {useState} from 'react'
import {Box, Card, Image, Heading, Text} from 'rebass'

/**
 * COMPONENT
 */
export const Home = () => {
  const images = 'images/logo-nav.png'
  const title = 'Welcome!'
  const description = 'This is the home page'

  const [boxWidth, setBoxWidth] = useState(256)

  return (
    <Box
      width={boxWidth}
      onMouseEnter={() => setBoxWidth(512)}
      onMouseLeave={() => setBoxWidth(256)}
    >
      <Card
        className="card"
        sx={{
          backgroundColor: 'lightgray',
          p: 1,
          borderRadius: 6,
          boxShadow: '0 0 16px rgba(0, 0, 0, 1.5)'
        }}
      >
        <Image src={images} />
        <Box px={2}>
          <Heading as="h3">{title}</Heading>
          <Text fontSize={0}>{description}</Text>
        </Box>
      </Card>
    </Box>
  )
}

export default Home
