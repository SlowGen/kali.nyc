import React, {useState} from 'react'
import {Box, Card, Flex, Heading, Text} from 'rebass'

import {
  HomeFull,
  AboutMini,
  WorkMini,
  PhotosMini,
  MsgMeMini
} from '../components'

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <Box>
      <Flex justifyContent="center">
        <Box width={1 / 5}>
          {/* left column */}
          <Flex flexDirection="column">
            <Box width={1} px={1} py={2}>
              <AboutMini />
            </Box>
            <Box width={1} px={1} py={2}>
              <PhotosMini />
            </Box>
          </Flex>
          {/* middle column */}
        </Box>
        <Box width={3 / 5} px={3} py={1} justifyContent="center">
          <HomeFull />
        </Box>
        <Box width={1 / 5}>
          {/* right column */}
          <Flex flexDirection="column">
            <Box width={1} px={1} py={2}>
              <WorkMini />
            </Box>
            <Box width={1} px={1} py={2}>
              <MsgMeMini />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Home
