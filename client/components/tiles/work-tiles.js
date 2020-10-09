import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Box, Card, Image, Flex} from 'rebass'
import {WorkContent} from '../../components'

export const WorkFull = () => {
  return (
    <Box>
      <Card
        className="card"
        sx={{
          backgroundColor: '#242939',
          p: 1,
          borderRadius: 6,
          boxShadow: '0 0 16px rgba(0, 0, 0, 1.5)'
        }}
      >
        <Box px={2}>
          <WorkContent />
        </Box>
      </Card>
    </Box>
  )
}

export const WorkMini = () => {
  const [boxWidth, setBoxWidth] = useState()

  return (
    <Box
      width={boxWidth}
      onMouseEnter={() => setBoxWidth(500)}
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
            <Link to="/work">
              <Image src="images/work.png" />
            </Link>
          </Card>
        </Box>
      </Flex>
    </Box>
  )
}
