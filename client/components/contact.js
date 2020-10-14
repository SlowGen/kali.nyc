/* eslint-disable no-alert */
import React from 'react'
import {Box, Flex, Image} from 'rebass'

const Contact = () => {
  const height = 60
  return (
    <Flex justifyContent="center">
      <Box justifyContent="center" pb={4}>
        <a href="mailto:info@kali.nyc">
          <Image src="images/email.png" maxHeight={height} />
        </a>
      </Box>
      <Box justifyContent="center">
        <a
          href="https://www.linkedin.com/in/kali-nfn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="images/linkedin.png" maxHeight={height} />
        </a>
      </Box>
      <Box justifyContent="center">
        <a
          href="https://github.com/SlowGen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="images/github.png" maxHeight={height} />
        </a>
      </Box>
    </Flex>
  )
}

export default Contact
