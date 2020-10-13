/* eslint-disable no-alert */
import React from 'react'
import {Box, Flex, Image} from 'rebass'

const MsgMeContent = () => {
  return (
    <Flex justifyContent="space-evenly">
      <Box justifyContent="center">
        <a href="mailto:info@kali.nyc">
          <Image src="images/email.png" />
        </a>
      </Box>
      <Box justifyContent="center">
        <a
          href="https://www.linkedin.com/in/kali-nfn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="images/linkedin.png" />
        </a>
      </Box>
      <Box justifyContent="center">
        <a
          href="https://github.com/SlowGen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="images/github.png" />
        </a>
      </Box>
    </Flex>
  )
}

export default MsgMeContent
