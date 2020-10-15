import React from 'react'
import {Box, Flex, Image} from 'rebass'

const About = () => {
  return (
    <Flex flexDirection="column" flexWrap="wrap">
      <Box pb={6}>
        <Flex justifyItems="space-between">
          <Box width={2 / 3} px={4}>
            <p>
              Raised in Oregon, Kali (a.k.a SlowGen) started her career in
              technology as the webmaster for local band{' '}
              <a
                href="http://dandywarhols.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Dandy Warhols
              </a>. After moving to NYC in 2000, she pursued a career in
              hospitality but found herself always drawn to her love of
              technology.
            </p>
          </Box>
          <Box width={1 / 3} px={4}>
            <Image src="images/photos/ziakali.jpg" maxHeight={160} />
          </Box>
        </Flex>
        <Flex justifyItems="space-between">
          <Box width={1 / 3} px={4}>
            <Image src="images/gh-logo.svg" maxWidth={250} />
          </Box>
          <Box width={2 / 3} px={4}>
            <p>
              In 2019, Kali left her successful past behind and jumped
              head-first into coding. After weeks of teaching herself Python and
              data visualization, Kali sought out guidance from other engineers
              in the area and ultimately settled on applying for the{' '}
              <a
                href="http://gracehopper.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grace Hopper program
              </a>{' '}
              at{' '}
              <a
                href="http://fullstackacademy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fullstack Academy
              </a>{' '}
              where she learned JavaScript and the NERD stack. Kali graduated in
              September 2020.
            </p>
          </Box>
        </Flex>
        <Flex justifyItems="space-between">
          <Box width={2 / 3} px={4}>
            <p>
              In her pre-Covid free time, Kali was an avid pool player competing
              in local leagues since 2007, winning several team championships
              and an MVP award. These days, she still keeps in touch with her
              pool friends and spends most of her time coding and you can find
              her enjoying life on the Upper West Side.
            </p>
          </Box>
          <Box width={1 / 3} px={4}>
            <Image src="images/photos/poolchamps.jpg" maxHeight={160} />
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Box>
            <p>
              Kali is currently open to new opportunities, please feel free to{' '}
              <a
                href="https://www.linkedin.com/in/kali-nfn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                reach out!
              </a>
            </p>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default About
