import React, {useState} from 'react'
import {Box, Card, Heading, Text} from 'rebass'

export const WorkFull = () => {
  const [boxWidth, setBoxWidth] = useState(256)

  const title = 'Welcome!'
  const description = 'Work-FULL'
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
        <Box px={2}>
          <Heading as="h3">{title}</Heading>
          <Text fontSize={0}>{description}</Text>
        </Box>
      </Card>
    </Box>
  )
}

export const WorkMini = () => {
  const [boxWidth, setBoxWidth] = useState(256)

  const title = 'Welcome!'
  const description = 'Work-MINI'
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
        <Box px={2}>
          <Heading as="h3">{title}</Heading>
          <Text fontSize={0}>{description}</Text>
        </Box>
      </Card>
    </Box>
  )
}
