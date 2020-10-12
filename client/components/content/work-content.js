import React from 'react'
import {Box, Flex, Image, Heading, Text} from 'rebass'

const WorkContent = () => {
  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Box>
        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2}>
            <Heading>Powersleep</Heading>
            <Text>
              Powersleep is an app developed as a submission for the{' '}
              <a
                href="2020.spaceappschallenge"
                target="blank"
                rel="noopener noreferrer"
              >
                2020 Space Apps Challenge
              </a>{' '}
              hosted by NASA. Our app utilizes Google Calendar and Oauth2 to
              find windows in a busy user's schedule and create sleep events. As
              part of a three person team, I was primarily responsible for front
              end development and design. Powersleep was built using React.
            </Text>
            <Box alignSelf="end">
              <a
                href="https://github.com/WomenInPower/powerSleep"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alignSelf="end"
                  src="images/otherlogos/Octocat.png"
                  maxHeight={75}
                />
              </a>
              <Text>View code on Github!</Text>
            </Box>
          </Box>
          <Box width={1 / 2} px={2}>
            <Image src="images/photos/powersleep.jpg" />
          </Box>
        </Flex>

        <hr />

        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2}>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/VGoNcz_78Ns"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
          <Box width={1 / 2} px={2}>
            <Heading>ScavengARescape!</Heading>
            <Text>
              An augmented reality adventure game built using Viro Media and
              React Native. This app was built as part of my final project at
              Grace Hopper. As part of a team of 4 developers, I was primarily
              in charge of developing each portal / level of the game, as well
              as customizing the positioning and scale of the 3D graphics to
              provide for an immersive experience.
            </Text>
            <Box alignSelf="end">
              <a
                href="https://github.com/Capstone-E/ScavengAR-Escape"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alignSelf="end"
                  src="images/otherlogos/Octocat.png"
                  maxHeight={75}
                />
              </a>
              <Text>View code on Github!</Text>
            </Box>
          </Box>
        </Flex>

        <hr />

        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2}>
            <Heading>EmoRocks</Heading>
            <Text>About EmoRocks</Text>
            <Box alignSelf="end">
              <a
                href="https://github.com/WeBeShoppin/emoRock"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alignSelf="end"
                  src="images/otherlogos/Octocat.png"
                  maxHeight={75}
                />
              </a>
              <Text>View code on Github!</Text>
            </Box>
          </Box>
          <Box width={1 / 2} px={2}>
            <Image src="images/otherlogos/emorocks.jpg" />
          </Box>
        </Flex>

        <hr />

        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2}>
            <Image src="images/otherlogos/splash.png" maxHeight={250} />
          </Box>
          <Box width={1 / 2} px={2}>
            <Heading>Pool House</Heading>
            <Text>About Pool House</Text>
            <Box alignSelf="end">
              <a
                href="https://github.com/SlowGen/PoolHouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alignSelf="end"
                  src="images/otherlogos/Octocat.png"
                  maxHeight={75}
                />
              </a>
              <Text>View code on Github!</Text>
            </Box>
          </Box>
        </Flex>

        <hr />

        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2} />
          <Box width={1 / 2} px={2} />
        </Flex>

        <hr />

        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2} />
          <Box width={1 / 2} px={2} />
        </Flex>

        <hr />

        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2} />
          <Box width={1 / 2} px={2} />
        </Flex>
      </Box>
    </Flex>
  )
}

export default WorkContent
