import React from 'react'
import {Box, Flex} from 'rebass'

import {
  WorkFull,
  AboutMini,
  WorkMini,
  BlogMini,
  PhotosMini,
  MsgMeMini
} from '../components'

/**
 * COMPONENT
 */
export const Work = () => {
  return (
    <Box>
      <Flex justifyContent="center">
        <Box justifyContent="right" width={1 / 8}>
          {/* left column */}
          <Flex flexDirection="column">
            <Box width={1} px={1} py={2}>
              <AboutMini />
            </Box>
            <Box width={1} px={1} py={2}>
              <WorkMini />
            </Box>
            <Box width={1} px={1} py={2}>
              <BlogMini />
            </Box>
            <Box width={1} px={1} py={2}>
              <PhotosMini />
            </Box>
            <Box width={1} px={1} py={2}>
              <MsgMeMini />
            </Box>
          </Flex>
          {/* middle column */}
        </Box>
        <Box width={7 / 8} px={3} py={1} justifyContent="center">
          <WorkFull />
        </Box>
      </Flex>
    </Box>
  )
}

export default Work
