import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Box, Card, Image, Flex} from 'rebass'
import {MsgMeContent} from '../../components'

export const MsgMeFull = () => {
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
          <MsgMeContent />
        </Box>
      </Card>
    </Box>
  )
}

export const MsgMeMini = () => {
  const [boxWidth, setBoxWidth] = useState()

  return (
    <Box
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
            <Link to="/msgme">
              <Image src="images/msgme.png" />
            </Link>
          </Card>
        </Box>
      </Flex>
    </Box>
  )
}
