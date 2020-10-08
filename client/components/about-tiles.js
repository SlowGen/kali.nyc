import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Box, Card, Heading, Text, Image, Flex} from 'rebass'

export const AboutFull = () => {
  const title = 'About!'
  const description =
    'About-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULLAbout-FULL'
  return (
    <Box>
      <Card
        className="card"
        sx={{
          backgroundColor: 'darkgray',
          p: 1,
          borderRadius: 6,
          boxShadow: '0 0 16px rgba(0, 0, 0, 1.5)'
        }}
      >
        <Box px={2}>
          <Heading as="h3">{title}</Heading>
          <Text fontSize={0}>{description}</Text>
        </Box>
      </Card>
    </Box>
  )
}

export const AboutMini = () => {
  const [boxWidth, setBoxWidth] = useState()

  return (
    <Box
      justifyContent="right"
      width={boxWidth}
      onMouseEnter={() => setBoxWidth(200)}
      onMouseLeave={() => setBoxWidth()}
    >
      <Flex>
        <Box>
          <Card
            className="card"
            sx={{
              backgroundColor: '#000925',
              p: 1,
              borderRadius: 6,
              boxShadow: '0 0 16px rgba(0, 0, 0, 1.5)'
            }}
          >
            <Link to="/about">
              <Image src="images/about.png" />
            </Link>
          </Card>
        </Box>
      </Flex>
    </Box>
  )
}
