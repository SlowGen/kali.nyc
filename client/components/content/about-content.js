import React from 'react'
import {Box, Flex, Image} from 'rebass'

const AboutContent = () => {
  return (
    <Flex flexDirection="column">
      <Box>
        <Flex justifyItems="space-between">
          <Box width={2 / 3} px={2}>
            <p>
              Raised in Oregon, Kali started her career in technology as the
              webmaster for local band{' '}
              <a href="http://dandywarhols.com">The Dandy Warhols</a>. After
              moving to NYC in 2000, she persued a career in hospitality but
              found herself always drawn back to her love of technology.
            </p>
          </Box>
          <Box width={1 / 3} px={2}>
            <Image src="images/photos/ziakali.jpg" maxHeight={160} />
          </Box>
        </Flex>
        <Flex justifyItems="space-between">
          <Box width={1 / 3} px={2}>
            <Image src="images/gh-logo.svg" maxWidth={250} />
          </Box>
          <Box width={2 / 3} px={2}>
            <p>
              In 2019, Kali left her successful past behind and jumped
              head-first into coding. After weeks of teaching herself Python and
              data visualiation, Kali sought out guidance from other engineers
              in the area and ultimately settled on applying for the{' '}
              <a href="http://gracehopper.com">Grace Hopper program</a> at{' '}
              <a href="http://fullstackacademy.com">Fullstack Academy</a> and
              graduated in September 2020.
            </p>
          </Box>
        </Flex>
        <Flex justifyItems="space-between">
          <Box width={2 / 3} px={2}>
            <p>
              In her pre-Covid free time, Kali was an avid pool player competing
              in local leagues since 2007, winning several team championships
              and an MVP award. Now, she still keeps in touch with her pool
              friends and spends most of her time coding and enjoying a full
              home life on the Upper West Side.
            </p>
          </Box>
          <Box width={1 / 3} px={2}>
            <Image src="images/photos/poolchamps.jpg" maxHeight={160} />
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Box>
            <p>
              Kali is currently open to new opportunities, please feel free to
              reach out!
            </p>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default AboutContent
