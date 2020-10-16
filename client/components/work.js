import React from 'react'
import {Box, Flex, Image, Heading, Text} from 'rebass'

const Work = () => {
  const margin = 0

  return (
    <Flex>
      <Box>
        <Flex flexWrap="wrap">
          <Box mx={margin} width={1}>
            <Heading>Powersleep</Heading>
            <Text display="inline-block" maxWidth="80%">
              Powersleep is an app developed as a submission for the{' '}
              <a
                href="2020.spaceappschallenge"
                target="_blank"
                rel="noopener noreferrer"
              >
                2020 Space Apps Challenge
              </a>{' '}
              hosted by NASA. Our app utilizes Google Calendar and Oauth2 to
              find windows in a busy user's schedule and create sleep events. As
              part of a three person team, I was responsible for front end
              development and design. Powersleep was built using React in less
              than 48 hours.
            </Text>
          </Box>
          <Box>
            <Flex>
              <Box width={4 / 5} mx={margin}>
                <Image src="images/photos/powersleep.jpg" maxHeight={200} />
              </Box>
              <Box width={1 / 5} alignSelf="center">
                <a
                  href="https://github.com/WomenInPower/powerSleep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="images/otherlogos/Octocat.png" maxHeight={75} />
                  <Text textAlign="center" fontSize={[1, 2, 3]}>
                    Github
                  </Text>
                </a>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <hr />

        <Flex flexWrap="wrap">
          <Box mx={margin} width={1}>
            <Heading>ScavengARescape!</Heading>
            <Text display="inline-block" maxWidth="80%">
              An augmented reality adventure game built using Viro Media and
              React Native. This app was my final presentation project at Grace
              Hopper. As part of a team of 4 developers, I developed each portal
              / level of the game, as well as customized the positioning and
              scale of the 3D graphics to provide for an immersive experience.
            </Text>
          </Box>
          <Box>
            <Flex>
              <Box width={4 / 5} mx={margin}>
                <iframe
                  width="90%"
                  height="100%"
                  src="https://www.youtube.com/embed/VGoNcz_78Ns"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <Box width={1 / 5} alignSelf="center">
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
                  <Text textAlign="center" fontSize={[1, 2, 3]}>
                    Github
                  </Text>
                </a>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <hr />

        <Flex flexWrap="wrap">
          <Box mx={margin} width={1}>
            <Heading>EmoRocks</Heading>
            <Text display="inline-block" maxWidth="80%">
              EmoRocks is a mock e-commerce site developed as a first project in
              the final phase of boot camp. As a member of a team of four, we
              accomplished building this site in just over a week using React,
              React Hooks, Redux and PostgreSQL. I built the user and admin
              fuctionality into the site and contributed to the database design.
            </Text>
          </Box>
          <Box>
            <Flex>
              <Box width={4 / 5} mx={margin}>
                <Image src="images/otherlogos/emorocks.jpg" maxHeight={100} />
              </Box>
              <Box width={1 / 5} alignSelf="center">
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
                  <Text textAlign="center" fontSize={[1, 2, 3]}>
                    Github
                  </Text>
                </a>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <hr />

        <Flex flexWrap="wrap">
          <Box mx={margin} width={1}>
            <Heading>PoolHouse</Heading>
            <Text display="inline-block" maxWidth="80%">
              PoolHouse is a light-weight mobile app that helps servers and
              bartenders calculate the distribution of tips amongst themselves.
              It was built as part of the Grace Hopper program's Stackathon over
              the course of a weekend. This app was my first exposure to mobile
              development and was built using React Native. The current code is
              still in development stage, but is one of the few projects that
              will continue on as a side project. Stay tuned for the release on
              Google Play!
            </Text>
          </Box>
          <Box>
            <Flex>
              <Box width={4 / 5} mx={margin}>
                <Image src="images/otherlogos/splash.png" maxHeight={150} />
              </Box>
              <Box width={1 / 5} alignSelf="center">
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
                  <Text textAlign="center" fontSize={[1, 2, 3]}>
                    Github
                  </Text>
                </a>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <hr />

        <Flex flexWrap="wrap">
          <Box mx={margin} width={1}>
            <Heading>The Dandy Warhols</Heading>
            <Text display="inline-block" maxWidth="80%">
              This site originated as a fan site created by myself and a fellow
              fan. After nearly two years of hosting the site on a university
              student server, we were asked to become the "official" site by the
              band. Ater procurring the domain, our first commercial site was
              born. Thanks to the Wayback Machine, the origins of my path to
              development live on.
            </Text>
          </Box>
          <Box>
            <Flex>
              <Box width={4 / 5} mx={margin}>
                <Image
                  src="images/otherlogos/dandysplash.jpg"
                  maxHeight={200}
                />
              </Box>
              <Box width={1 / 5} alignSelf="center">
                <a
                  href="https://web.archive.org/web/19990504204259/http://www.dandywarhols.com/welcome2.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="images/otherlogos/waybackmachine.svg.png"
                    maxHeight={200}
                  />
                  <Text textAlign="center" fontSize={[1, 2, 3]}>
                    Wayback Machine
                  </Text>
                </a>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <hr />
      </Box>
    </Flex>
  )
}

export default Work

// this is a style template for adding more projects in the future:

/* <hr />

        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2}></Box>
          <Box width={1 / 2} px={2}></Box>
        </Flex> */
